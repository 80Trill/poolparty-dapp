import React from 'react';
import PropTypes from 'prop-types';

import Text from 'Components/utility/inputs/Text';
import Button from 'Components/utility/elements/Button';
import PageSection from 'Components/utility/PageSection';

import CreatePool from './CreatePool';

import styles from './styles.scss';


/**
 * App entry point for any user.
 */
class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            creatingPool: false,
            poolAddress: '',
            poolId: ''
        };

        this.toggleCreatePool = this.toggleCreatePool.bind(this);
        this.setPoolById = this.setPoolById.bind(this);
        this.setPoolByAddress = this.setPoolByAddress.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    setPoolByAddress(isAdmin) {
        if (this.props.poolList.includes(this.state.poolAddress)) {
            this.props.setCurrentPool(this.state.poolAddress, isAdmin);
        } else {
            this.props.showAlert(`Sorry, ${this.state.poolAddress} is not a valid Pool address.`);
        }
    }

    setPoolById(isAdmin) {
        if (this.props.poolList.length > +this.state.poolId) {
            this.props.setCurrentPool(this.props.poolList[this.state.poolId], isAdmin);
        } else {
            this.props.showAlert(`Sorry, ${this.state.poolId} is not a valid Pool ID.`);
        }
    }

    toggleCreatePool() {
        this.setState({ creatingPool: !this.state.creatingPool });
    }


    render() {
        return (
            <PageSection hasBackground hasBottomCurves hasGradient>
                <div>
                    {this.state.creatingPool ?
                        <CreatePool
                            userAccount={this.props.userAccount}
                            createNewPool={this.props.createNewPool}
                            toggleCreatePool={this.toggleCreatePool}
                        />

                        :

                        // prevent FOUC; see styles.scss, line 5
                        <div style={{ opacity: 0 }} className={styles['welcome-container']}>
                            <figure className={styles['instance-container']}>
                                <figcaption><h2>Current Version - 1.0</h2></figcaption>
                                <span>{this.props.instanceAddress}</span>
                            </figure>

                            <div className={styles.divider}>
                                <h2>Welcome to the party!</h2>

                                <div className={styles['choose-pool-container']}>
                                    <Text
                                        name={'poolAddress'}
                                        value={this.state.poolAddress}
                                        labelText={'Pool Address'}
                                        onChange={this.handleChange}
                                    />

                                    <div className={styles['buttons-container']}>
                                        <Button
                                            width={'100%'}
                                            text={'User'}
                                            onClick={() => this.setPoolByAddress(false)}
                                        />

                                        <Button
                                            width={'100%'}
                                            text={'Admin'}
                                            onClick={() => this.setPoolByAddress(true)}
                                        />
                                    </div>

                                    <p>or</p>

                                    {/*<div className={styles['select-container']}>*/}
                                        {/*<select*/}
                                            {/*name={'poolId'}*/}
                                            {/*value={this.state.poolId}*/}
                                            {/*onChange={this.handleChange}*/}
                                        {/*>*/}
                                            {/*{!this.state.poolId && <option>Pool ID</option>}*/}

                                            {/*{this.props.poolList.map((poolAddress, index) => <option key={poolAddress} value={poolAddress}>{index}</option>)}*/}
                                        {/*</select>*/}

                                        {/*<svg viewBox="0 0 12 24" className="button">*/}
                                            {/*<polygon points="2 10, 10 10, 6 14" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />*/}
                                        {/*</svg>*/}

                                        <Text
                                            name={'poolId'}
                                            value={this.state.poolId}
                                            labelText={'Pool ID'}
                                            onChange={this.handleChange}
                                        />

                                        <div className={styles['buttons-container']}>
                                            <Button
                                                width={'100%'}
                                                text={'User'}
                                                onClick={() => this.setPoolById(false)}
                                            />

                                            <Button
                                                width={'100%'}
                                                text={'Admin'}
                                                onClick={() => this.setPoolById(true)}
                                            />
                                        </div>
                                    {/*</div>*/}
                                </div>
                            </div>

                            <div>
                                <h2>Break ground on a new pool!</h2>

                                <div className={styles['button-container']}>
                                    <Button
                                        width={'100%'}
                                        text={'Create new pool'}
                                        onClick={this.toggleCreatePool}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </PageSection>
        );
    }
}


Welcome.propTypes = {
    instanceAddress: PropTypes.string,
    poolList: PropTypes.arrayOf(PropTypes.string).isRequired,
    createNewPool: PropTypes.func.isRequired,
    setCurrentPool: PropTypes.func.isRequired,
    userAccount: PropTypes.string,
    showAlert: PropTypes.func
};

export default Welcome;
