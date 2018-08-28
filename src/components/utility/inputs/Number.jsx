import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


function Number(props) {
    return (
        <div className={styles['number-container']}>
            <input
                type="number"
                name={props.name}
                value={props.value}
                placeholder={props.placeholderText || props.labelText}
                aria-label={props.labelText}
                title={props.labelText}
                min={props.min}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                className={props.className}
            />

            <svg viewBox="0 0 12 24" className={styles['spin-buttons']}>
                <polygon points="6 2, 10 9, 2 9" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />

                <polygon points="2 15, 10 15, 6 22" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
            </svg>
        </div>
    );
}


Number.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    min: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    className: PropTypes.string
};

Number.defaultProps = {
    min: 0,
    onKeyDown: null,
    onFocus: null,
    onBlur: null
};

export default Number;
