/* global Pool */

import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import FadeComponent from './utility/FadeComponent';
import PageSection from './utility/PageSection';
import Notifications from './Notifications';

import Header from './Header';
import Welcome from './Welcome';
import CurrentPool from './CurrentPool';
import PoolConfiguration from './PoolConfiguration';
import Tokens from './Tokens';
import AdminActions from './AdminActions';
import UserActions from './UserActions';
import ClaimTokens from './ClaimTokens';
import ClaimReimbursements from './ClaimReimbursements';

import { convertContractInformationToNumber } from '../helpers';


ReactModal.setAppElement('#modalRoot');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdmin: false,
            isOwner: false,
            adminView: false,

            notification: {
                type: '', // error, alert, transaction, retry, poolInformation, noMetamask
                message: ''
            },

            pool: {},

            poolList: [],

            instanceAddress: '',
            poolAddress: '',
            userAccount: '',

            poolState: '',
            poolId: null,

            ethRaised: '',
            percentageOfCapRaised: 0,

            totalReimbursement: {},
            totalReimbursementAvailable: {},
            totalReimbursementClaimed: {},

            userBalance: 0,
            contractBalance: 0,

            minContribution: 0,
            maxContribution: 0,
            maxAllocation: 0,
            adminFeePercentage: 0,
            adminFeePayoutIsToken: true,
            hasWhitelist: false,

            tokenAddress: '',
            tokenName: {},
            tokenDecimal: {},
            tokenBalance: {},
            tokenBalanceContract: {},
            totalTokensDistributed: {},
            totalTokensUserHasClaimed: {},
            totalTokensUserCanClaim: {},
            totalTokens: {}
        };

        this.web3 = props.web3;

        this.updateGlobals = this.updateGlobals.bind(this);
        this.updateTransactionStatus = this.updateTransactionStatus.bind(this);

        this.toggleOpenClosedPool = this.toggleOpenClosedPool.bind(this);
        this.cancelPool = this.cancelPool.bind(this);

        this.setMinMaxContribution = this.setMinMaxContribution.bind(this);
        this.setMaxAllocation = this.setMaxAllocation.bind(this);
        this.updateWhitelist = this.updateWhitelist.bind(this);

        this.sendEther = this.sendEther.bind(this);
        this.refundEther = this.refundEther.bind(this);

        this.refundAddress = this.refundAddress.bind(this);
        this.claimReimbursement = this.claimReimbursement.bind(this);
        this.claimAddress = this.claimAddress.bind(this);

        this.refundAll = this.refundAll.bind(this);
        this.claimAllReimbursements = this.claimAllReimbursements.bind(this);
        this.claimAllAddresses = this.claimAllAddresses.bind(this);

        this.projectReimbursement = this.projectReimbursement.bind(this);
        this.transferEther = this.transferEther.bind(this);

        this.addToken = this.addToken.bind(this);
        this.removeToken = this.removeToken.bind(this);

        this.raiseError = this.raiseError.bind(this);
        this.showTransactionNotification = this.showTransactionNotification.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.showRetryNotification = this.showRetryNotification.bind(this);
        this.retryClaimAllMethod = this.retryClaimAllMethod.bind(this);
        this.dismissNotification = this.dismissNotification.bind(this);

        this.getPoolAddress = this.getPoolAddress.bind(this);
        this.setCurrentPool = this.setCurrentPool.bind(this);
        this.createNewPool = this.createNewPool.bind(this);
    }


    updateGlobals() {
        const pool = this.state.pool;

        this.setState({
            userAccount: pool.userAccount,
            userBalance: +pool.userBalance,
            contractBalance: +pool.contractBalance,
            // ethRaised: this.web3.fromWei(+pool.ethRaised.c[0], 'ether'),
            ethRaised: +pool.ethRaised,
            percentageOfCapRaised: +pool.percentageOfCapRaised,
            totalReimbursement: +pool.totalReimbursement,
            totalReimbursementAvailable: +pool.totalReimbursementAvailable,
            totalReimbursementClaimed: +pool.totalReimbursementClaimed,
            minContribution: +pool.minContribution,
            maxContribution: +pool.maxContribution,
            maxAllocation: +pool.maxAllocation,
            adminFeePercentage: convertContractInformationToNumber(pool.adminFeePercentageDecimal, pool.adminFeePercentage),
            adminFeePayoutIsToken: pool.adminFeePayoutIsToken === 'Tokens',
            poolState: pool.poolState,
            tokenAddress: pool.tokenAddress,
            tokenName: pool.tokenName,
            tokenBalance: pool.tokenBalance,
            tokenBalanceContract: pool.tokenBalanceContract,
            totalTokensDistributed: pool.totalTokensDistributed,
            totalTokensUserHasClaimed: pool.totalTokensUserHasClaimed,
            totalTokensUserCanClaim: pool.totalTokensUserCanClaim,
            totalTokens: pool.totalTokens
        });
    }

    updateTransactionStatus(isSuccessful, message, hash) {
        console.log(`[status] ${isSuccessful} ${message} ${hash}`);

        if (!isSuccessful && message.method) {
            this.showRetryNotification(message);
        } else {
            this.showTransactionNotification(message);
        }
    }

    toggleOpenClosedPool() {
        if (this.state.poolState === 'Open') {
            this.state.pool.setPoolToClosed(err => {
                if (err) this.raiseError(err);
            });

        } else if (this.state.poolState === 'Closed') {
            this.state.pool.setPoolToOpen(err => {
                if (err) this.raiseError(err);
            });
        }
    }

    cancelPool() {
        this.state.pool.setPoolToCancelled(err => {
            if (err) this.raiseError(err);
        });
    }

    setMinMaxContribution(minValue, maxValue) {
        this.state.pool.setMinMaxContribution(minValue, maxValue, err => {
            if (err) this.raiseError(err);
        });
    }

    setMaxAllocation(poolCap) {
        this.state.pool.setMaxAllocation(poolCap, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Add or remove address(es) to/from the whitelist.
     * @param {string} addOrRemove
     * @param {string[] | string} addresses
     */
    updateWhitelist(addOrRemove, addresses) {
        if (addOrRemove === 'add') {
            this.state.pool.addAddressesToWhitelist(addresses, err => {
                if (err) this.raiseError(err);
            });
        } else if (addOrRemove === 'remove') {
            this.state.pool.removeAddressFromWhitelistAndRefund(addresses, err => {
                if (err) this.raiseError(err);
            });
        }
    }


    /**
     * Deposit/send Ether from the current user to the current pool.
     * @param {number} amount
     * @param {string} userAddress
     */
    sendEther(amount, userAddress) {
        this.state.pool.sendEther(amount, userAddress, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Process a refund for the current user.
     */
    refundEther() {
        this.state.pool.refundEther(err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Process a refund for the specified user, and remove them from the whitelist if specified.
     * @param {string} userAddress - user to refund
     * @param {boolean} willRemoveFromWhitelist - also remove user from whitelist
     */
    refundAddress(userAddress, willRemoveFromWhitelist) {
        if (willRemoveFromWhitelist) {
            this.state.pool.removeAddressFromWhitelistAndRefund(userAddress, err => {
                if (err) this.raiseError(err);
            });

        } else {
            this.state.pool.refundAddress(userAddress, err => {
                if (err) this.raiseError(err);
            });
        }
    }

    /**
     * Request a reimbursement for a user.
     * @param {string} userAddress - user to reimburse
     */
    claimReimbursement(userAddress) {
        this.state.pool.claimReimbursement(userAddress, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Claim available tokens for the specified user.
     * @param {string} userAddress
     */
    claimAddress(userAddress) {
        this.state.pool.claimAddress(userAddress, err => {
            if (err) this.raiseError(err);
        });
    }

    // “claim all” methods

    /**
     * Process refund for every user that contributed to the pool, and update refund totals. If a batch fails, provide admin with the option to try again.
     */
    refundAll() {
        this.state.pool.refundAll(err => {
            if (err) {
                this.raiseError(err);
            } else {
                this.state.pool.updateTotalReimbursement(err => {
                    if (err) this.raiseError(err);
                });

                this.state.pool.updateTotalReimbursementAvailable(err => {
                    if (err) this.raiseError(err);
                });
            }
        })
    }

    /**
     * Process a reimbursement to all users; if a batch fails, provide the admin with the option to try again.
     */
    claimAllReimbursements() {
        this.state.pool.claimAllReimbursement(err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Claim all available tokens for every user who contributed to the pool.
     */
    claimAllAddresses() {
        this.state.pool.claimAllAddresses(err => {
            if (err) this.raiseError(err);
        });
    }

    /////

    /**
     * Processes a refund for the project, and distributes the refund at a pro-rata rate.
     * @param {number} amount - amount of Ether to refund
     */
    projectReimbursement(amount) {
        this.state.pool.projectReimbursement(amount, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Transfer Ether out of Pool; when this transaction completes, Pool state will change to "Awaiting Tokens"
     * @param {string} address - address to which all the Ether in the contract is sent
     */
    transferEther(address) {
        this.state.pool.transferWei(address, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Add a token to the pool.
     * @param {string} tokenAddress - ERC20 address
     */
    addToken(tokenAddress) {
        this.state.pool.addToken(tokenAddress, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Remove token from list of pool tokens.
     * @param {string} tokenAddress - ERC20 address
     */
    removeToken(tokenAddress) {
        this.state.pool.removeToken(tokenAddress, err => {
            if (err) this.raiseError(err);
        });
    }

    /**
     * Trigger an error notification, and display the error object's message.
     * @param {Object} errorObject
     */
    raiseError(errorObject) {
        this.setState({
            notification: {
                type: 'error',
                message: errorObject.message
            }
        });
    }

    /**
     * Show a self-dismissing transaction when a transaction resolves.
     * @param {string} message - message to display
     */
    showTransactionNotification(message) {
        this.setState({
            notification: {
                type: 'transaction',
                message
            }
        });
    }

    /**
     * Show alert notification.
     * @param {string} message - message to display
     */
    showAlert(message) {
        this.setState({
            notification: {
                type: 'alert',
                message
            }
        });
    }

    showRetryNotification(errorObject) {
        this.setState({
            notification: {
                type: 'retry',
                message: errorObject
            }
        })
    }

    retryClaimAllMethod(method, firstIndex, numberOfAddresses) {
        this.state.pool[method](firstIndex, numberOfAddresses, err => this.raiseError(err));
    }

    /**
     * General notification clear method.
     */
    dismissNotification() {
        this.setState({
            notification: {
                type: '',
                message: ''
            }
        });
    }

    getPoolAddress(id, resolve, reject) {
        this.state.pool.getPoolAddress(id, (err, res) => {
            if (!err) {
                resolve(res);
            } else {
                reject(console.error(err));
            }
        });
    }

    /**
     * Generate a list of all pools associated with the PoolParty instance.
     */
    generatePoolAddressList() {
        function createPromises(length, getAddress) {
            let i = 0;
            let addresses = [];

            for (i; i < length; i++) {
                addresses.push(new Promise((resolve, reject) => getAddress(i, resolve, reject)));
            }

            return Promise.all(addresses);
        }

        this.state.pool.nextPoolId((err, res) => {
            if (!err) {
                createPromises(res.c[0], this.getPoolAddress)
                    .then((result) => this.setState({ poolList: result }));
            } else {
                console.error(err);
            }
        });
    }

    /**
     * Set the current pool and specify whether to use Admin or User view.
     * @param {string} poolAddress
     * @param {boolean} useAdminView
     */
    setCurrentPool(poolAddress, useAdminView) {
        try {
            this.state.pool.setCurrentPool(poolAddress);

            // check to see if pool has a whitelist
            this.state.pool.poolInstance.hasWhitelist((err, res) => {
                if (!err) {
                    this.setState({ hasWhitelist: res });
                } else {
                    console.error(err);
                }
            });

            // check to see if user is one of this pool's admins
            this.state.pool.poolInstance.getAdminAddressArray((err, res) => {
                    if (!err) {
                        if (res.includes(this.state.userAccount)) {

                            this.setState({ isAdmin: true, adminView: useAdminView }, () => {
                                // if an admin, check if user is also the owner
                                this.state.pool.poolInstance.owner((err, res) => {
                                    if (!err) {
                                        if (this.state.userAccount === res) {
                                            this.setState({ isOwner: true });
                                        }
                                    } else {
                                        console.error(err);
                                    }
                                });
                            });
                        }
                    } else {
                        console.error(err);
                    }
                }
            );

            // set pool id in react state object
            this.setState({
                poolId: this.state.poolList.findIndex(pool => pool === poolAddress),
                poolAddress
            });
        }

        catch(error) {
            this.raiseError(error);
        }
    }

    /**
     * Create a new pool.
     * @param {string[]} adminsArray - list of all admins for the pool
     * @param {string[]} configsArray - pool configuration values
     * @param {string[]} boolArray - strings that represent boolean values
     */
    createNewPool(adminsArray, configsArray, boolArray) {
        this.state.pool.createPool(adminsArray, configsArray, boolArray, (err, result) => {
            if (err) {
                this.raiseError(err);
            } else {
                this.state.pool.nextPoolId((err, res) => {
                    if (!err) {
                        this.setState({
                            notification: {
                                type: 'poolInformation',
                                values: {
                                    id: res.c[0],
                                    txHash: result
                                }
                            }
                        });
                    } else {
                        console.error(err);
                    }
                });
            }
        });
    }

    componentDidMount() {
        this.web3.eth.getAccounts((err, res) => {
            if (!err) {
                this.setState({ pool: new Pool(this.web3, res, this.updateGlobals, this.updateTransactionStatus) }, () => {
                    this.setState({ userAccount: this.state.pool.userAccount, instanceAddress: this.state.pool.poolPartyInstance.address }); // cannot set until pool has been instantiated on the state object

                    this.generatePoolAddressList();

                    if (!this.state.pool.userAccount) {
                        this.setState({
                            notification: {
                                type: 'lockedAlert',
                                message: 'Please log into MetaMask and reload the page first!'
                            }
                        });
                    }
                });
            } else {

                this.setState({
                    notification: {
                        type: 'noMetamask'
                    }
                });

                console.error(err);
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <Header
                        poolAddress={this.state.poolAddress}
                        poolId={this.state.poolId}
                        poolState={this.state.poolState}
                        asAdmin={this.state.isAdmin && this.state.adminView}
                        userBalance={this.state.userBalance}
                    />
                </header>

                <main>
                    <FadeComponent in={this.state.poolAddress.length === 0}>
                        <Welcome
                            instanceAddress={this.state.instanceAddress}
                            poolList={this.state.poolList}
                            userAccount={this.state.userAccount}

                            setCurrentPool={this.setCurrentPool}
                            createNewPool={this.createNewPool}

                            showAlert={this.showAlert}
                        />
                    </FadeComponent>

                    <FadeComponent in={this.state.poolAddress.length > 0}>
                        <React.Fragment>
                            <PageSection hasBackground hasBottomCurves hasGradient>
                                <CurrentPool
                                    poolAddress={this.state.poolAddress}
                                    percentageOfCapRaised={this.state.percentageOfCapRaised}
                                    ethRaised={this.state.ethRaised}
                                />
                            </PageSection>

                            <PageSection>
                                <PoolConfiguration
                                    hasWhitelist={this.state.hasWhitelist}
                                    poolState={this.state.poolState}
                                    asAdmin={this.state.isAdmin && this.state.adminView}

                                    maxAllocation={this.state.maxAllocation}
                                    maxContribution={this.state.maxContribution}
                                    minContribution={this.state.minContribution}
                                    adminFeePercentage={this.state.adminFeePercentage}
                                    adminFeePayoutIsToken={this.state.adminFeePayoutIsToken}

                                    updateWhitelist={this.updateWhitelist}
                                />
                            </PageSection>

                            {this.state.poolState === 'Completed' &&
                                <PageSection hasBackground hasGradient hasTopCurves hasBottomCurves>
                                    <Tokens
                                        adminView={this.state.adminView}

                                        tokenAddress={this.state.tokenAddress}
                                        tokenBalance={this.state.tokenBalance}
                                        tokenBalanceContract={this.state.tokenBalanceContract}
                                        totalTokensUserHasClaimed={this.state.totalTokensUserHasClaimed}
                                        tokenName={this.state.tokenName}
                                        tokenDecimal={this.state.tokenDecimal}
                                        totalTokensDistributed={this.state.totalTokensDistributed}
                                        totalTokensUserCanClaim={this.state.totalTokensUserCanClaim}
                                        totalTokens={this.state.totalTokens}
                                    />
                                </PageSection>
                            }

                            {this.state.adminView ?
                                <AdminActions
                                    poolState={this.state.poolState}
                                    isOwner={this.state.isOwner}

                                    raiseError={this.raiseError}
                                    toggleOpenClosed={this.toggleOpenClosedPool}
                                    cancelPool={this.cancelPool}
                                    setMinMax={this.setMinMaxContribution}
                                    setPoolCap={this.setMaxAllocation}

                                    refundAddress={this.refundAddress}
                                    projectReimbursement={this.projectReimbursement}
                                    transferEther={this.transferEther}

                                    addToken={this.addToken}
                                    removeToken={this.removeToken}

                                    hasWhitelist={this.state.hasWhitelist}
                                    refundAll={this.refundAll}
                                />

                                :

                                <UserActions
                                    poolState={this.state.poolState}
                                    userAccount={this.state.userAccount}

                                    userBalance={this.state.userBalance}
                                    totalTokensUserCanClaim={this.state.totalTokensUserCanClaim}

                                    sendEther={this.sendEther}
                                    refundEther={this.refundEther}

                                    claimAddress={this.claimAddress}
                                />
                            }

                            {this.state.poolState === 'Completed' &&
                                <PageSection>
                                    <ClaimTokens
                                        asAdmin={this.state.isAdmin && this.state.adminView}
                                        userAccount={this.state.userAccount}

                                        claimAddress={this.claimAddress}
                                        claimAllAddresses={this.claimAllAddresses}
                                    />
                                </PageSection>
                            }

                            {(this.state.poolState === 'Awaiting Tokens' || this.state.poolState === 'Completed') &&
                                <PageSection hasBackground hasTopCurves hasBottomCurves>
                                    <ClaimReimbursements
                                        asAdmin={this.state.isAdmin && this.state.adminView}
                                        userAccount={this.state.userAccount}

                                        totalReimbursementClaimed={this.state.totalReimbursementClaimed}
                                        totalReimbursementAvailable={this.state.totalReimbursementAvailable}
                                        contractBalance={this.state.contractBalance}

                                        claimReimbursement={this.claimReimbursement}
                                        claimAllReimbursements={this.claimAllReimbursements}
                                    />
                                </PageSection>
                            }
                        </React.Fragment>
                    </FadeComponent>
                </main>

                <Notifications
                    {...this.state.notification}
                    boundMethod={this.retryClaimAllMethod}
                    dismiss={this.dismissNotification}
                />
            </React.Fragment>
        );
    }
}

App.propTypes = {
    web3: PropTypes.object.isRequired
};


export default App;
