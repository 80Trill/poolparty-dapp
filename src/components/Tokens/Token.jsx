import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';
import RoundingTooltip from 'Components/utility/elements/RoundingTooltip';

import styles from './styles.scss';


function Token(props) {
    const tooltipAvailable = `roundingInfoAvailable`;
    const tooltipClaimed = `roundingInfoClaimed`;

    return (
        <div className={styles['token-card']}>
            <h3>{props.name || ''}</h3>

            <span>{props.address}</span>

            <div className={styles['claim-status-container']}>
                <figure>
                    <span data-tip data-for={tooltipClaimed}>{props.claimed.toLocaleString()}</span>

                    <figcaption>Claimed</figcaption>

                    <RoundingTooltip id={tooltipClaimed} />
                </figure>

                <figure>
                    <span data-tip data-for={tooltipAvailable}>{props.balance.toLocaleString()}</span>

                    <figcaption>Unclaimed</figcaption>

                    <RoundingTooltip id={tooltipAvailable} />
                </figure>
            </div>
        </div>
    );
}


Token.propTypes = {
    address: PropTypes.string.isRequired,
    name: PropTypes.string,
    balance: PropTypes.number.isRequired,
    claimed: PropTypes.number.isRequired
};

export default Token;
