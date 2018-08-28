import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import styles from './styles.scss';


/**
 * Notify user when a pool transaction has completed.
 */
function Transaction(props) {
    return (
        <ReactModal
            isOpen={true}
            className={`${styles.notification} ${props.show ? styles['is-visible'] : ''}`}
            overlayClassName={styles['no-overlay']}
        >
            {props.message}
        </ReactModal>
    );
}


Transaction.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
};

export default Transaction;
