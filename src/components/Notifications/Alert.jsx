import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import Button from 'Components/utility/elements/Button';

import styles from './styles.scss';


function Alert(props) {
    return (
        <ReactModal
            isOpen={props.show}
            className={props.isLocked ? styles['locked-alert'] : styles['dismissible-alert']}
            onRequestClose={props.clear}
            overlayClassName={styles.overlay}
            closeTimeoutMS={300}
        >
            <p>{props.message}</p>

            {!props.isLocked && <Button text={'Ok'} onClick={props.clear} />}
        </ReactModal>
    );
}


Alert.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    clear: PropTypes.func,
    isLocked: PropTypes.bool
};

export default Alert;
