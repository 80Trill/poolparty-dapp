import React from 'react';
import PropTypes from 'prop-types';

import SubmitNumberInput from 'Components/utility/inputs/SubmitNumberInput';
import Text from 'Components/utility/inputs/Text';
import Number from 'Components/utility/inputs/Number';
import Button from 'Components/utility/elements/Button';



class SendEther extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toUserAddress: '',
            ethToContribute: '',
            toUserDisabled: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.contributeSelf = this.contributeSelf.bind(this);
        this.contributeOther = this.contributeOther.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'toUserAddress') {
            this.setState({
                toUserAddress: event.target.value,
                toUserDisabled: !event.target.value.length || !this.state.ethToContribute.length
            });
        } else {
            this.setState({
                ethToContribute: event.target.value,
                toUserDisabled: !this.state.toUserAddress.length || !event.target.value.length
            });
        }
    }

    handleFocus() {
        if (!this.state.toUserAddress.length || !this.state.ethToContribute.length) this.setState({ toUserDisabled: true });
    }

    handleBlur() {
        if (!this.state.toUserAddress.length && !this.state.ethToContribute.length) this.setState({ toUserDisabled: false });
    }

    contributeSelf(amount) {
        this.props.sendEther(amount, this.props.userAccount);
    }

    contributeOther() {
        this.props.sendEther(this.state.ethToContribute, this.state.toUserAddress);
    }


    render() {
        return (
            <React.Fragment>
                {this.props.self ?
                    <div>
                        <p>To contribute ETH to this pool, please enter the ETH below and jump on in.</p>

                        <SubmitNumberInput
                            labelText={'ETH to contribute'}
                            onSubmit={this.contributeSelf}
                        />
                    </div>

                    :

                    <div>
                        <p>Want to contribute ETH on behalf of another user?</p>

                        <Text
                            name={'toUserAddress'}
                            value={this.state.toUserAddress}
                            labelText={'User Address'}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />

                        <Number
                            name={'ethToContribute'}
                            value={this.state.ethToContribute}
                            labelText={'ETH to contribute'}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />

                        <Button
                            width={'100%'}
                            isDisabled={this.state.toUserDisabled}
                            onClick={this.contributeOther}
                        />

                    </div>
                }
            </React.Fragment>
        );
    }
}


SendEther.propTypes = {
    userAccount: PropTypes.string.isRequired,
    self: PropTypes.bool.isRequired,
    sendEther: PropTypes.func.isRequired
};

export default SendEther;
