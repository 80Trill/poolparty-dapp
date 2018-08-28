import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import Text from 'Components/utility/inputs/Text';
import Button from 'Components/utility/elements/Button';
import SubmitCancelButtons from 'Components/utility/elements/SubmitCancelButtons';

import styles from './styles.scss';


class AddToWhitelist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addressArray: [],
            newAddress: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addAddress = this.addAddress.bind(this);
        this.removeAddress = this.removeAddress.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.props.handleSubmit('add', this.state.addressArray);

        this.props.close();
    }

    addAddress() {
        const addresses = new Set(this.state.addressArray);
        const newAddresses = this.state.newAddress.split(',');

        newAddresses.forEach(address => addresses.add(address.trim()));

        this.setState({
            addressArray: [ ...addresses ],
            newAddress: ''
        });
    }

    removeAddress(addressToRemove) {
        const addresses = new Set(this.state.addressArray);

        addresses.delete(addressToRemove);

        this.setState({
            addressArray: [ ...addresses ]
        });
    }


    render() {
        return (
            <ReactModal
                isOpen={this.props.show}
                className={styles.whitelist}
                overlayClassName={styles.overlay}
                closeTimeoutMS={300}
            >
                <div>
                    <h3>Add Addresses to Pool Whitelist</h3>

                    <p>Add addresses one at a time, or paste a comma-separated list of addresses into the text field and click “Add”.</p>

                    <div className={styles['add-whitelist-address']}>
                        <Text
                            name={'newAddress'}
                            labelText={'Add Address'}
                            value={this.state.newAddress}
                            onChange={this.handleChange}
                        />

                        <Button
                            text={'Add'}
                            isDisabled={this.state.newAddress.length === 0}
                            onClick={this.addAddress}
                        />
                    </div>

                    <ul className={styles['whitelist-addresses']}>
                        {this.state.addressArray.map(address => (
                            <li key={address}>
                                <span>{address}</span>
                                <span role="button" onClick={() => this.removeAddress(address)}>Remove Address</span>
                            </li>
                        ))}
                    </ul>

                    <SubmitCancelButtons
                        submitText={'Submit Addresses'}
                        handleSubmit={this.handleSubmit}
                        handleCancel={this.props.close}
                    />
                </div>
            </ReactModal>
        );
    }
}


AddToWhitelist.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default AddToWhitelist;
