import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import Button from 'Components/utility/elements/Button';

import styles from './styles.scss';

// todo: replace with correct network
const blockchainPartialUrl = 'https://rinkeby.etherscan.io/tx/';


function PoolInformation(props) {
    return (
        <ReactModal
            isOpen={props.show}
            className={styles['dismissible-alert']}
            onRequestClose={props.clear}
            overlayClassName={styles.overlay}
            closeTimeoutMS={300}
        >
            <div className={styles['pool-information']}>
                <p>Your Pool will be created with the following information:</p>

                <p><strong>ID</strong> {props.values.id}</p>
                <p><strong>TxHash</strong> <a href={`${blockchainPartialUrl}${props.values.txHash}`}>{props.values.txHash}</a></p>
            </div>

            <Button
                text={'Ok'}
                onClick={props.clear}
            />
        </ReactModal>
    );
}


PoolInformation.propTypes = {
    show: PropTypes.bool.isRequired,
    values: PropTypes.object.isRequired,
    clear: PropTypes.func
};

export default PoolInformation;
