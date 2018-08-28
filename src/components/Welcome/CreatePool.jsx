import React from 'react';
import PropTypes from 'prop-types';

import { convertNumberForContract } from '../../helpers';

import Number from 'Components/utility/inputs/Number';
import Button from 'Components/utility/elements/Button';
import Text from 'Components/utility/inputs/Text';
import Toggle from 'Components/utility/inputs/Toggle';
import CompareMinMax from 'Components/utility/inputs/CompareMinMax';

import AdminAddress from './AdminAddress';

import styles from './styles.scss';


/**
 * Allows admin user to configure and create a new pool.
 */
class CreatePool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minMaxValid: true,
            newAdminAccount: '',
            adminsArray: [],
            maxContribution: '',
            minContribution: '',
            maxAllocation: '',
            adminFeePercentage: '',
            adminFeePayoutIsToken: true,
            hasWhitelist: false
        };

        this.handleMinMaxChange = this.handleMinMaxChange.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleWhitelist = this.toggleWhitelist.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleToggleChange(event) {
        this.setState({ adminFeePayoutIsToken: JSON.parse(event.target.value) });
    }

    handleMinMaxChange(min, max, validity) {
        this.setState({
            minContribution: min,
            maxContribution: max,
            minMaxValid: !validity.length
        });
    }

    toggleWhitelist() {
        this.setState({ hasWhitelist: !this.state.hasWhitelist });
    }

    addAdmin() {
        const admins = new Set(this.state.adminsArray);

        if (this.state.newAdminAccount !== this.props.userAccount) {
            admins.add(this.state.newAdminAccount.trim());
        }

        this.setState({
            adminsArray: [ ...admins ],
            newAdminAccount: ''
        });
    }

    removeAdmin(address) {
        const admins = new Set(this.state.adminsArray);

        admins.delete(address);

        this.setState({ adminsArray: [ ...admins ]});
    }

    handleSubmit() {
        const adminsArray = [
            this.props.userAccount,
            ...this.state.adminsArray
        ];

        const configsArray = [
            this.state.maxAllocation,
            this.state.minContribution,
            this.state.maxContribution,
            ...convertNumberForContract(+this.state.adminFeePercentage, true)
        ];

        const boolArray = [
            this.state.hasWhitelist,
            this.state.adminFeePayoutIsToken
        ];

        this.props.createNewPool(adminsArray, configsArray, boolArray);
        this.props.toggleCreatePool();
    }


    render() {
        return (
            <div style={{ opacity: 0 }} className={styles['create-container']}>
                <h2 className={styles['create-title']}>Create Pool</h2>

                <div className={`${styles.divider} ${styles['create-input-container']}`}>
                    <div className={styles['add-admins']}>
                        <Text
                            name={'newAdminAccount'}
                            value={this.state.newAdminAccount}
                            labelText={'Add Admin Address'}
                            onChange={this.handleChange}
                        />

                        <Button
                            text={'Add'}
                            isDisabled={this.state.newAdminAccount.length === 0}
                            onClick={this.addAdmin}
                        />
                    </div>

                    <CompareMinMax
                        minPlaceholder={'Minimum User Contribution'}
                        maxPlaceholder={'Maximum User Contribution'}
                        handleChanges={this.handleMinMaxChange}
                    />

                    <Number
                        name={'maxAllocation'}
                        labelText={'Pool Cap'}
                        value={this.state.maxAllocation}
                        onChange={this.handleChange}
                        />

                    <Number
                        name={'adminFeePercentage'}
                        labelText={'Admin Fee %'}
                        value={this.state.adminFeePercentage}
                        onChange={this.handleChange}
                    />

                    <Toggle
                        labelText={'Admin Fee in'}
                        option1={'Tokens'}
                        option2={'Ether'}
                        handleChange={this.handleToggleChange}
                    />

                    <label className={styles.checkbox}>
                        <input
                            name="hasWhitelist"
                            type="checkbox"
                            defaultChecked={this.state.hasWhitelist === true}
                            onClick={this.toggleWhitelist}
                        />
                        <span>Whitelist Enabled</span>
                    </label>

                    {/* ensure all required values are set before submitting */}
                    <Button
                        width={'100%'}
                        text={'Create Pool'}
                        onClick={this.handleSubmit}
                        isDisabled={
                            !this.state.minMaxValid ||
                            !this.state.maxAllocation ||
                            !this.state.adminFeePercentage
                        }
                    />

                    <button type="button"
                            className={styles['back-button']}
                            onClick={this.props.toggleCreatePool}
                    >
                        <svg viewBox="0 0 10 10" aria-hidden="true">
                            <polygon points="2 5, 8 2, 8 8" fill="none" stroke="currentColor" strokeLinejoin="round" />
                        </svg>
                        <span>Back</span>
                    </button>

                </div>

                <div className={styles['addresses-container']}>
                    <h3>Admin Addresses</h3>

                    <ul className={styles['addresses-list']}>
                        <AdminAddress
                            address={this.props.userAccount}
                            removeAdmin={false}
                        />

                        {this.state.adminsArray.map(address => <AdminAddress
                            key={address}
                            address={address}
                            removeAdmin={this.removeAdmin}
                        />)}
                    </ul>

                    <p><strong>You</strong> are the <strong>only admin</strong> who can:</p>

                    <ol>
                        <li>Receive Admin Fee</li>
                        <li>Transfer the ETH out of the contract</li>
                    </ol>

                    <p>The other admins have access to all other functionality.</p>
                </div>
            </div>
        );
    }
}


CreatePool.propTypes = {
    createNewPool: PropTypes.func.isRequired,
    userAccount: PropTypes.string.isRequired,
    toggleCreatePool: PropTypes.func.isRequired
};

export default CreatePool;
