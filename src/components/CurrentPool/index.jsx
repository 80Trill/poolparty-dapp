import React from 'react';
import PropTypes from 'prop-types';

import ProgressIndicator from 'Components/CurrentPool/ProgressIndicator';

import styles from './styles.scss';


/**
 * General information about the current pool.
 * @param props
 * @returns {*}
 * @constructor
 */
function CurrentPool(props) {
    return (
        <React.Fragment>
            <figure className={styles.container}>
                <figcaption><h2>Current Pool Address</h2></figcaption>
                <span>{props.poolAddress}</span>
            </figure>

            <div className={styles.progress}>
                <ProgressIndicator
                    diameter={230}
                    labelText={'ETH Raised'}
                    altValue={props.ethRaised}
                    showPct={false}
                    progressPercentage={props.percentageOfCapRaised}
                />

                <ProgressIndicator
                    diameter={230}
                    labelText={'Pool Cap % Raised'}
                    showPct={true}
                    progressPercentage={props.percentageOfCapRaised}
                />

            </div>
        </React.Fragment>
    );
}

CurrentPool.propTypes = {
    poolAddress: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    percentageOfCapRaised: PropTypes.number,
    ethRaised: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CurrentPool;
