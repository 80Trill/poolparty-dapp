import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';
import Text from 'Components/utility/inputs/Text';


/**
 * Controlled component consisting of two numerical input fields, and a button.
 */
class RefundAddress extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            refundAddress: '',
            removeFromWhitelist: false,
            isDisabled: false
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            refundAddress: event.target.value,
            isDisabled: !event.target.value.length
        });
    }

    handleCheckboxChange() {
        this.setState({ removeFromWhitelist: !this.state.removeFromWhitelist });
    }

    handleFocus() {
        if (!this.state.refundAddress.length) this.setState({ isDisabled: true });
    }

    handleBlur() {
        this.setState({ isDisabled: false });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.refundAddress, this.state.removeFromWhitelist);
    }


    render() {
        return (
            <div>
                <Text
                    value={this.state.refundAddress}
                    labelText={'Refund Address'}
                    onChange={this.handleFieldChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />

                {this.props.hasWhitelist &&
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked={this.state.removeFromWhitelist}
                            onClick={this.handleCheckboxChange}
                        />
                        <span>Remove From Whitelist</span>
                    </label>
                }

                <Button
                    width={'100%'}
                    isDisabled={this.state.isDisabled}
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}


RefundAddress.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    hasWhitelist: PropTypes.bool.isRequired
};


export default RefundAddress;
