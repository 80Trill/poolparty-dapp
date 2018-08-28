import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import Button from 'Components/utility/elements/Button';
import CloseButton from 'Components/utility/CloseButton';

import styles from './styles.scss';


/**
 * Notify admin when a Claim All method fails, and provide an opportunity to try again with the helper method.
 * @param props
 * @return {*}
 * @constructor
 */
function Retry(props) {
    const { method, msg, numberOfAddresses, firstIndex } = props.message;

    const handleTryAgain = () => {
        props.boundMethod(method, msg, firstIndex, numberOfAddresses);

        props.clear();
    };

    return (
        <ReactModal
            isOpen={props.show}
            className={styles.retry}
            onRequestClose={props.clear}
            overlayClassName={styles.overlay}
            closeTimeoutMS={300}
        >
            <span className={styles.close}><CloseButton close={props.clear} /></span>

            <p>{msg}</p>

            <p><Button text={'Try again?'} onClick={handleTryAgain} /></p>
        </ReactModal>
    );
}


Retry.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.object.isRequired,
    boundMethod: PropTypes.func,
    clear: PropTypes.func
};

export default Retry;
