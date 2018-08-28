import React from 'react';
import PropTypes from 'prop-types';

import PageSection from 'Components/utility/PageSection';
import Button from 'Components/utility/elements/Button';

import SendEther from './SendEther';

import styles from './styles.scss';


function UserActions(props) {
    const tokensRemain = Object.values(props.totalTokensUserCanClaim)[0];

    return (
        <React.Fragment>
            {props.poolState === 'Awaiting Tokens' || props.poolState === 'Completed' ?
                <PageSection className={styles['actions-container-completed']}>
                    {props.poolState === 'Awaiting Tokens' ?
                        <p>The pool is currently <strong>awaiting tokens</strong>. You can no longer leave the pool.</p>

                        :

                        <React.Fragment>
                            <p>The pool currently <strong>has tokens</strong>. {tokensRemain > 0 ? 'Claim more tokens below' : 'All your available tokens have been claimed'}.
                            </p>

                            {tokensRemain > 0 &&
                                <Button
                                    text={'Claim Tokens'}
                                    onClick={() => props.claimAddress(props.userAccount)}
                                />
                            }
                        </React.Fragment>
                    }
                </PageSection>

                :

                <PageSection hasBackground hasTopCurves hasBottomCurves>
                    <div className={styles.container}>
                        {props.poolState === 'Open' &&
                            <div className={styles[props.userBalance > 0 ? 'actions-container-refund' : 'actions-container']}>
                                <div>
                                    <SendEther
                                        userAccount={props.userAccount}
                                        self={true}
                                        sendEther={props.sendEther}
                                    />
                                </div>

                                <div>
                                    <SendEther
                                        userAccount={props.userAccount}
                                        self={false}
                                        sendEther={props.sendEther}
                                    />
                                </div>

                                {props.userBalance > 0 &&
                                    <div>
                                        <div>
                                            <p>No longer interested in the pool?</p>

                                            <Button
                                                width={'100%'}
                                                text={'Refund Me'}
                                                onClick={props.refundEther}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                        {props.poolState === 'Closed' &&
                            <p>The pool is currently <strong>closed</strong>. You can no longer leave the pool.</p>
                        }

                        {props.poolState === 'Cancelled' &&
                            <React.Fragment>
                                <p>The party has been <strong>cancelled</strong>. Collect your refund now.</p>

                                {/* todo: can we use pool.totalReimbursementAvailable here as well? */}
                                <Button
                                    text={'Refund Me'}
                                    onClick={props.refundEther}
                                />
                            </React.Fragment>
                        }
                    </div>
                </PageSection>
            }
        </React.Fragment>
    );
}


UserActions.propTypes = {
    poolState: PropTypes.string.isRequired,
    userAccount: PropTypes.string,
    userBalance: PropTypes.number,
    totalTokensUserCanClaim: PropTypes.object.isRequired,

    sendEther: PropTypes.func.isRequired,
    refundEther: PropTypes.func.isRequired,

    claimAddress: PropTypes.func.isRequired
};

export default UserActions;
