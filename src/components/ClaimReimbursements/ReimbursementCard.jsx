import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';
import RoundingTooltip from 'Components/utility/elements/RoundingTooltip';

import styles from './styles.scss';


function ReimbursementCard(props) {
    const tooltipAvailable = `roundingInfoAvailable`;
    const tooltipClaimed = `roundingInfoClaimed`;

    const ethAvailable = props.asAdmin ? props.balance : props.available;

    return (
        <div className={styles.reimbursements}>
            <h3>{props.asAdmin ? 'Total' : 'Your'} Reimbursements</h3>

            <div className={styles['reimbursement-values']}>
                <figure>
                    <span data-tip data-for={tooltipAvailable}>{ethAvailable.toLocaleString()}</span>

                    <figcaption>Available</figcaption>

                    <RoundingTooltip id={tooltipAvailable} />
                </figure>

                {props.asAdmin &&
                    <figure>
                        <span data-tip data-for={tooltipClaimed}>{props.claimed.toLocaleString()}</span>

                        <figcaption>Claimed</figcaption>

                        <RoundingTooltip id={tooltipClaimed} />
                    </figure>
                }
            </div>
        </div>

    );
}


ReimbursementCard.propTypes = {
    asAdmin: PropTypes.bool,
    claimed: PropTypes.number,
    available: PropTypes.number,
    balance: PropTypes.number
};

export default ReimbursementCard;
