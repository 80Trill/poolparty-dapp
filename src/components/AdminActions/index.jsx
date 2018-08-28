import React from 'react';
import PropTypes from 'prop-types';

import PageSection from 'Components/utility/PageSection';
import Button from 'Components/utility/elements/Button';
import SubmitNumberInput from 'Components/utility/inputs/SubmitNumberInput';
import SubmitTextInput from 'Components/utility/inputs/SubmitTextInput';

import RefundAddress from './RefundAddress';
import SetMinMaxContribution from './SetMinMaxContribution';
import OpenClosePool from './OpenClosePool';
import CancelPool from './CancelPool';
import AddToken from './AddToken';
import ProjectReimbursement from './ProjectReimbursement';
import RemoveToken from './RemoveToken';

import styles from './styles.scss';


function AdminActions(props) {
    const poolState = props.poolState;

    return (
        <div className={styles['actions-container']}>
            {poolState === 'Open' || poolState === 'Closed' ?
                <PageSection hasBackground hasTopCurves hasBottomCurves>
                    <div className={styles['active-actions-container']}>
                        <div>
                            <SubmitNumberInput labelText={'Set Pool Cap'} onSubmit={props.setPoolCap} />
                        </div>

                        <div className={poolState === 'Open' ? 'is-blank' : ''}>
                            {props.poolState === 'Closed' && props.isOwner &&
                                <div className={styles['text-with-button']}>
                                    <SubmitTextInput
                                        labelText={'Transfer Eth to Address'}
                                        buttonText={'Transfer Eth'}
                                        onSubmit={props.transferEther}
                                    />
                                </div>
                            }
                        </div>

                        <div>
                            <OpenClosePool
                                isOwner={props.isOwner}
                                poolState={props.poolState}
                                toggleState={props.toggleOpenClosed}
                            />
                        </div>

                        <div>
                            <SetMinMaxContribution onSubmit={props.setMinMax} />
                        </div>

                        <div>
                            <RefundAddress
                                onSubmit={props.refundAddress}
                                hasWhitelist={props.hasWhitelist}
                            />
                        </div>

                        <div>
                            <CancelPool cancelPool={props.cancelPool} />
                        </div>
                    </div>
                </PageSection>

                :

                <PageSection>
                    {poolState === 'Awaiting Tokens' &&
                        <div className={styles['awaiting-actions-container']}>
                            <div><AddToken addToken={props.addToken} /></div>

                            <div><ProjectReimbursement handleSubmit={props.projectReimbursement} /></div>
                        </div>
                    }

                    {poolState === 'Completed' &&
                        <div className={styles['completed-actions-container']}>
                            <div><AddToken addToken={props.addToken} /></div>

                            <div><RemoveToken removeToken={props.removeToken} /></div>

                            <div><ProjectReimbursement handleSubmit={props.projectReimbursement} /></div>
                        </div>
                    }
                </PageSection>
            }

            {props.poolState === 'Cancelled' &&
                <PageSection hasBackground hasTopCurves>
                    <div className={styles['cancelled-container']}>
                    <p>This pool has been <strong>cancelled</strong>.</p>

                    <Button
                        text={'Refund All Users'}
                        onClick={props.refundAll}
                    />
                    </div>
                </PageSection>
            }
        </div>
    );
}


AdminActions.propTypes = {
    poolState: PropTypes.string.isRequired,
    isOwner: PropTypes.bool.isRequired,
    raiseError: PropTypes.func.isRequired,
    toggleOpenClosed: PropTypes.func.isRequired,
    cancelPool: PropTypes.func.isRequired,
    setMinMax: PropTypes.func.isRequired,
    setPoolCap: PropTypes.func.isRequired,
    refundAddress: PropTypes.func.isRequired,
    projectReimbursement: PropTypes.func.isRequired,
    transferEther: PropTypes.func.isRequired,
    addToken: PropTypes.func.isRequired,
    removeToken: PropTypes.func.isRequired,
    hasWhitelist: PropTypes.bool.isRequired,
    refundAll: PropTypes.func.isRequired
};

export default AdminActions;
