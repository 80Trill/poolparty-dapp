import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import CloseButton from 'Components/utility/CloseButton';

import styles from './styles.scss';


function Error(props) {
    return (
        <ReactModal
            isOpen={props.show}
            className={styles.error}
            overlayClassName={styles.overlay}
            closeTimeoutMS={300}
        >
            <span className={styles.close}><CloseButton close={props.clear} /></span>

            <p className={styles['error-heading']}>Error!</p>
            <p>{props.message}</p>

        </ReactModal>
    );
}


Error.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string,
    clear: PropTypes.func.isRequired
};

export default Error;
