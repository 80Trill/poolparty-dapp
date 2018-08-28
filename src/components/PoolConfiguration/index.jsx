import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';
import PageSection from 'Components/utility/PageSection';

import AddToWhitelist from 'Components/AdminActions/AddToWhitelist';
import RemoveFromWhitelist from 'Components/AdminActions/RemoveFromWhitelist';

import styles from './styles.scss';


/**
 * Display current configuration options set for the current pool.
 */
class PoolConfiguration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addingToWhitelist: false,
            removingFromWhitelist: false
        };

        this.toggleAddToWhitelist = this.toggleAddToWhitelist.bind(this);
        this.toggleRemoveFromWhitelist = this.toggleRemoveFromWhitelist.bind(this);
    }

    toggleAddToWhitelist() {
        this.setState({ addingToWhitelist: !this.state.addingToWhitelist });
    }

    toggleRemoveFromWhitelist() {
        this.setState({ removingFromWhitelist: !this.state.removingFromWhitelist });
    }


    render() {
        const { minContribution, maxContribution, adminFeePercentage, adminFeePayoutIsToken, maxAllocation, asAdmin, poolState, hasWhitelist } = this.props;

        return (
            <React.Fragment>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Pool Configuration</h2>

                    <div className={`${styles.settings}`}>
                        <div>
                            <figure>
                                <span>{minContribution}</span>
                                <figcaption>Min ETH Contribution</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure>
                                <span>{maxContribution}</span>
                                <figcaption>Max ETH Contribution</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure>
                                <span>{adminFeePercentage}%</span>
                                <figcaption>Admin Fee %</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure>
                                <span>{adminFeePayoutIsToken ? 'Tokens' : 'Ether'}</span>
                                <figcaption>Admin Fee</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure>
                                <span>{maxAllocation}</span>
                                <figcaption>Pool Cap (ETH)</figcaption>
                            </figure>
                        </div>
                    </div>

                    {hasWhitelist && asAdmin && (poolState === 'Open' || poolState === 'Closed') &&
                        <div className={styles['has-whitelist']}>
                            <Button
                                isPrimary={false}
                                text={'Add addresses to whitelist'}
                                onClick={this.toggleAddToWhitelist}
                            />

                            {/*<Button*/}
                                {/*isPrimary={false}*/}
                                {/*text={'Remove address from whitelist'}*/}
                                {/*onClick={this.toggleRemoveFromWhitelist}*/}
                            {/*/>*/}
                        </div>
                    }
                </div>

                <AddToWhitelist
                    show={this.state.addingToWhitelist}
                    close={this.toggleAddToWhitelist}
                    handleSubmit={this.props.updateWhitelist}
                />

                <RemoveFromWhitelist
                    show={this.state.removingFromWhitelist}
                    close={this.toggleRemoveFromWhitelist}
                    handleSubmit={this.props.updateWhitelist}
                />
            </React.Fragment>
        );
    }
}


PoolConfiguration.propTypes = {
    hasWhitelist: PropTypes.bool,
    poolState: PropTypes.string.isRequired,
    asAdmin: PropTypes.bool.isRequired,

    maxAllocation: PropTypes.number.isRequired,
    maxContribution: PropTypes.number.isRequired,
    minContribution: PropTypes.number.isRequired,
    adminFeePercentage: PropTypes.number.isRequired,
    adminFeePayoutIsToken: PropTypes.bool,

    updateWhitelist: PropTypes.func.isRequired
};

PoolConfiguration.defaultProps = {
    adminFeePayoutIsToken: 'Tokens',
    hasWhitelist: false
};

export default PoolConfiguration;
