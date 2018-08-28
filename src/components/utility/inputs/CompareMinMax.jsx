import React from 'react';
import PropTypes from 'prop-types';

import Number from './Number';

import styles from './styles.scss';


/**
 * Compare values, and display an error if there is a mismatch.
 */
class CompareMinMax extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            max: '',
            min: '',
            invalidInput: ''
        };

        this.handleMaxChange = this.handleMaxChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
    }

    checkValidity(fieldName, newValue) {
        if (fieldName === 'min' && newValue > this.state.max) {
            this.setState({ invalidInput: 'min' });

        } else if (fieldName === 'max' && newValue < this.state.min) {
            this.setState({ invalidInput: 'max' });

        } else {
            this.setState({ invalidInput: '' });
        }
    }

    handleMaxChange(event) {
        const value = event.target.value !== '' ? +event.target.value : '';

        this.setState({ max: value }, this.checkValidity('max', +event.target.value));
    }

    handleMinChange(event) {
        const value = event.target.value !== '' ? +event.target.value : '';

        this.setState({ min: value }, this.checkValidity('min', +event.target.value));
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.handleChanges(this.state.min, this.state.max, this.state.invalidInput);
        }
    }

    render() {
        return (
            <div className={styles['min-max']}>
                <Number
                    value={this.state.max}
                    labelText={this.props.maxPlaceholder}
                    onChange={this.handleMaxChange}
                    className={this.state.invalidInput === 'max' ? 'invalid' : ''}
                />

                {this.state.invalidInput &&
                    <div className={styles['invalid-message']}>
                        {this.state.invalidInput === 'min' ?
                            this.props.minInvalid :
                            this.props.maxInvalid
                        }
                    </div>
                }

                <Number
                    value={this.state.min}
                    labelText={this.props.minPlaceholder}
                    onChange={this.handleMinChange}
                    className={this.state.invalidInput === 'min' ? 'invalid' : ''}
                />
            </div>
        );
    }
}


CompareMinMax.propTypes = {
    maxPlaceholder: PropTypes.string,
    minPlaceholder: PropTypes.string,
    maxInvalid: PropTypes.string,
    minInvalid: PropTypes.string,
    handleChanges: PropTypes.func.isRequired
};

CompareMinMax.defaultProps = {
    maxPlaceholder: 'Set Maximum Contribution',
    minPlaceholder: 'Set Minimum Contribution',
    maxInvalid: 'Minimum contribution cannot be greater than the Maximum',
    minInvalid: 'Maximum contribution cannot be less than the Minimum'
};

export default CompareMinMax;
