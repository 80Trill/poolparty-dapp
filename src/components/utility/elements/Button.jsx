import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


function Button(props) {
    return (
        <button type="button"
                onClick={props.onClick}
                disabled={props.isDisabled}
                className={props.isPrimary ? styles['submit-button-primary'] : styles['submit-button-secondary']}
                style={{ width: props.width }}
        >{props.text}</button>
    );
}


Button.propTypes = {
    isPrimary: PropTypes.bool,
    width: PropTypes.string,
    text: PropTypes.string,
    isDisabled: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    isPrimary: true,
    width: '',
    text: 'Confirm',
    isDisabled: false
};

export default Button;
