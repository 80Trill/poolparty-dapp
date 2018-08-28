import React from 'react';
import PropTypes from 'prop-types';

import ClaimAddress from './ClaimAddress';
import ClaimAllAddresses from './ClaimAllAddresses';

import styles from './styles.scss';


/**
 * Components to allow a user or admin to claim tokens on behalf of another user, or all users
 * @param props
 * @returns {*}
 * @constructor
 */
function ClaimTokens(props) {
    return (
        <div className={styles['actions-container']}>
            <div><ClaimAddress claimAddress={props.claimAddress} /></div>

            <div><ClaimAllAddresses claimAllAddresses={props.claimAllAddresses} /></div>
        </div>
    );
}


ClaimTokens.propTypes = {
    asAdmin: PropTypes.bool.isRequired,
    claimAddress: PropTypes.func.isRequired,
    claimAllAddresses: PropTypes.func.isRequired
};

export default ClaimTokens;
