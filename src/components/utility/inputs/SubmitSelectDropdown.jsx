import React from 'react';
import PropTypes from 'prop-types';

import Button from '../elements/Button';

import styles from './styles.scss';


/**
 * Controlled component consisting of a <select> dropdown, and a button.
 */
class SubmitSelectDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.value);
    }


    render() {
        const { buttonText, options } = this.props;

        return (
            <React.Fragment>
                <div className={styles['select-container']}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {!this.state.value && <option>Pool ID</option>}

                        {options.map((option, index) => <option key={option} value={option}>{index}</option>)}
                    </select>

                    <svg viewBox="0 0 12 24" className={styles['select-dropdown-button']}>
                        <polygon points="2 10, 10 10, 6 14" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
                    </svg>
                </div>

                <Button
                    width={'100%'}
                    text={buttonText}
                    isDisabled={!this.state.value}
                    onClick={this.handleSubmit}
                />
            </React.Fragment>
        );
    }
}


SubmitSelectDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

SubmitSelectDropdown.defaultProps = {
    buttonText: 'Confirm'
};

export default SubmitSelectDropdown;
