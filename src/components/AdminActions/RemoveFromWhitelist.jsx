import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import Text from 'Components/utility/inputs/Text';
import SubmitCancelButtons from 'Components/utility/elements/SubmitCancelButtons';

import styles from './styles.scss';


class RemoveFromWhitelist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ address: event.target.value });
    }

    handleSubmit() {
        this.props.handleSubmit('remove', this.state.address);

        this.props.close();
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
                    <h3>Remove Address from Pool Whitelist</h3>

                    <Text
                        name="address"
                        labelText={'Remove Address'}
                        value={this.state.address}
                        onChange={this.handleChange}
                    />

                    <SubmitCancelButtons
                        submitText={'Remove Address'}
                        handleSubmit={this.handleSubmit}
                        handleCancel={this.props.close}
                        isDisabled={!this.state.address.length}
                    />
                </div>
            </ReactModal>
        );
    }
}


RemoveFromWhitelist.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default RemoveFromWhitelist;
