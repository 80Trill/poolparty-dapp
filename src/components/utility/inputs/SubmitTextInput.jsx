import React from 'react';
import PropTypes from 'prop-types';

import Button from '../elements/Button';
import Text from './Text';


/**
 * Controlled component consisting of a single text input field, and a button.
 */
class SubmitTextInput extends React.Component {
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
                <Text
                    value={this.state.value}
                    labelText={this.props.labelText}
                    placeholderText={this.props.placeholderText}
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


SubmitTextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string
};

SubmitTextInput.defaultProps = {
    buttonText: 'Confirm',
    className: ''
};

export default SubmitTextInput;
