import React from 'react';
import PropTypes from 'prop-types';

import Button from '../elements/Button';
import Number from './Number';


/**
 * Controlled component consisting of a single numerical input field, and a button.
 */
class SubmitNumberInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isDisabled: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            isDisabled: !event.target.value.length
        });
    }


    handleKeydown(event) {
        if (event.key === 'Enter') this.handleSubmit();
    }

    handleFocus() {
        if (!this.state.value.length) this.setState({ isDisabled: true });
    }

    handleBlur() {
        this.setState({ isDisabled: false });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.value);
    }


    render() {
        return (
            <div className={this.props.className}>
                <Number
                    value={this.state.value}
                    placeholder={this.props.placeholderText}
                    labelText={this.props.labelText}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeydown}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />

                <Button
                    width={'100%'}
                    text={this.props.buttonText}
                    onClick={this.handleSubmit}
                    isDisabled={this.state.isDisabled}
                />
            </div>
        );
    }
}


SubmitNumberInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string
};

SubmitNumberInput.defaultProps = {
    buttonText: 'Confirm',
    className: ''
};

export default SubmitNumberInput;
