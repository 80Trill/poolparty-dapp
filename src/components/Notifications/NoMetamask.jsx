import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import styles from './styles.scss';


function NoMetamask(props) {
    return (
        <ReactModal
            isOpen={props.show}
            className={styles['no-metamask']}
            onRequestClose={props.clear}
            overlayClassName={styles.overlay}
            closeTimeoutMS={300}
        >
            <p>The MetaMask browser extension is not installed. Please go to <a href='https://metamask.io'>https://metamask.io</a> and return to this page after installing.</p>

        </ReactModal>
    );
}


NoMetamask.propTypes = {
    show: PropTypes.bool.isRequired
};

export default NoMetamask;
