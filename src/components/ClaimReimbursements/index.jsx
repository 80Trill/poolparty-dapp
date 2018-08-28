import React from 'react';
import PropTypes from 'prop-types';

import ClaimOwnReimbursement from './ClaimOwnReimbursement';
import ClaimReimbursement from './ClaimReimbursement';
import ClaimAllReimbursements from './ClaimAllReimbursements';
import ReimbursementCard from './ReimbursementCard';

import styles from './styles.scss';


function ClaimReimbursements(props) {
    const showReimbursementInformation = props.totalReimbursementClaimed > 0 || props.totalReimbursementAvailable > 0;

    return (
        <div className={styles.container}>
            {showReimbursementInformation ?

                <div className={styles['actions-container']}>
                    <ReimbursementCard
                        asAdmin={props.asAdmin}
                        claimed={props.totalReimbursementClaimed}
                        available={props.totalReimbursementAvailable}
                        balance={props.contractBalance}
                    />

                    {props.asAdmin ?
                        <div className={styles['actions-container-admin']}>
                            {props.totalReimbursementAvailable > 0 &&
                                <React.Fragment>
                                    <div>
                                        <ClaimReimbursement
                                            asAdmin={props.asAdmin}
                                            claimReimbursement={props.claimReimbursement}
                                        />
                                    </div>

                                    <div>
                                        <ClaimAllReimbursements claimAllReimbursements={props.claimAllReimbursements} />
                                    </div>
                                </React.Fragment>
                            }
                        </div>

                        :

                        <div className={styles['actions-container-user']}>
                            {props.totalReimbursementAvailable > 0 &&
                                <React.Fragment>
                                    <div>
                                        <ClaimOwnReimbursement
                                            userAccount={props.userAccount}
                                            claimReimbursement={props.claimReimbursement}
                                        />
                                    </div>

                                    <div>
                                        <ClaimReimbursement
                                            asAdmin={props.asAdmin}
                                            claimReimbursement={props.claimReimbursement}
                                        />
                                    </div>

                                    <div>
                                        <ClaimAllReimbursements claimAllReimbursements={props.claimAllReimbursements} />
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    }

                </div>

                :

                <p>No reimbursements are available for this pool.</p>
            }
        </div>
    );
}

ClaimReimbursements.propTypes = {
    asAdmin: PropTypes.bool.isRequired,
    userAccount: PropTypes.string.isRequired,

    totalReimbursementClaimed: PropTypes.number,
    totalReimbursementAvailable: PropTypes.number,
    contractBalance: PropTypes.number,

    claimReimbursement: PropTypes.func.isRequired,
    claimAllReimbursements: PropTypes.func.isRequired
};

export default ClaimReimbursements;
