import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


function CloseButton(props) {
    return (
        <button type="button" onClick={props.close} className={styles.close} aria-label="dismiss error message">
            <svg viewBox="0 0 12 12" overflow="visible" aria-hidden="true">
                <line x1={2} y1={2} x2={10} y2={10} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                <line x1={2} y1={10} x2={10} y2={2} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
        </button>
    );
}


CloseButton.propTypes = {
    close: PropTypes.func.isRequired
};

export default CloseButton;
