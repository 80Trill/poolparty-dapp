import React from 'react';
import PropTypes from 'prop-types';


function Text(props) {
    return (
        <input
            type="text"
            name={props.name}
            value={props.value}
            placeholder={props.placeholderText || props.labelText}
            aria-label={props.labelText}
            title={props.labelText}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            className={props.className}
        />
    );
}


Text.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string
};

Text.defaultProps = {
    onKeyDown: null,
    onFocus: null,
    onBlur: null
};

export default Text;
