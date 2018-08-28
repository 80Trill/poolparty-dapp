import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


/**
 * Displays an admin's address during pool creation, and provides a method to delete an address before creating the pool
 * @param props
 * @returns {*}
 * @constructor
 */
function AdminAddress(props) {
    return (
        <li className={styles['admin-address']}>
            <span>{props.address}</span>

            {props.removeAdmin === false ?
                <span style={{ cursor: 'not-allowed' }}>You cannot remove your own address!</span>

                :

                <span role="button" onClick={() => props.removeAdmin(props.address)}>Click to remove address</span>
            }
        </li>
    );
}


AdminAddress.propTypes = {
    address: PropTypes.string.isRequired,
    removeAdmin: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired
};

export default AdminAddress;
