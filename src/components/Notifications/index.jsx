import React from 'react';
import PropTypes from 'prop-types';

import Alert from './Alert';
import Retry from './Retry';
import Error from './Error';
import Transaction from './Transaction';
import PoolInformation from './PoolInformation';
import NoMetamask from './NoMetamask';


class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotification: false
        };

        this.showTransactionConfirmation = this.showTransactionConfirmation.bind(this);
        this.clearNotification = this.clearNotification.bind(this);
    }


    /**
     * Show a notification message, then call clearNotification() after ~5 seconds.
     */
    showTransactionConfirmation() {
        this.setState({ showNotification: true }, () => setTimeout(() => this.clearNotification(), 5000));

    }

    clearNotification() {
        this.setState({ showNotification: false }, () => setTimeout(() => this.props.dismiss(), 1000));
    }


    componentDidUpdate(prevProps) {
        if (prevProps.type === '' && this.props.type.length > 0) {
            if (this.props.type === 'transaction') {
                this.showTransactionConfirmation();
            } else {
                this.setState({ showNotification: true });
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.type === 'error' &&
                    <Error
                        show={this.state.showNotification}
                        message={this.props.message}
                        clear={this.clearNotification}
                    />
                }

                {this.props.type === 'transaction' &&
                    <Transaction
                        show={this.state.showNotification}
                        message={this.props.message}
                    />
                }

                {this.props.type === 'alert' &&
                    <Alert
                        show={this.state.showNotification}
                        message={this.props.message}
                        clear={this.clearNotification}
                    />
                }

                {this.props.type === 'retry' &&
                    <Retry
                        show={this.state.showNotification}
                        message={this.props.message}
                        boundMethod={this.props.boundMethod}
                        clear={this.clearNotification}
                    />
                }

                {this.props.type === 'lockedAlert' &&
                    <Alert
                        show={this.state.showNotification}
                        message={this.props.message}
                        isLocked={true}
                    />
                }

                {this.props.type === 'poolInformation' &&
                    <PoolInformation
                        show={this.state.showNotification}
                        values={this.props.values}
                        clear={this.clearNotification}
                    />
                }

                {this.props.type === 'noMetamask' &&
                    <NoMetamask show={this.state.showNotification} />
                }
            </React.Fragment>
        );
    }
}


Notifications.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    boundMethod: PropTypes.func,
    dismiss: PropTypes.func.isRequired
};

export default Notifications;
