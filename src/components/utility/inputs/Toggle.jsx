import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
        };
    }


    render() {
        return (
            <div className={styles['toggle-container']}>
                <fieldset>
                    <legend>{this.props.labelText}</legend>

                    <label>
                        <input
                            name="value"
                            type="radio"
                            defaultChecked={this.state.value}
                            value={true}
                            onChange={this.props.handleChange}
                        />
                        <span>{this.props.option1}</span>
                    </label>

                    <label>
                        <input
                            name="value"
                            type="radio"
                            defaultChecked={!this.state.value}
                            value={false}
                            onChange={this.props.handleChange}
                        />
                        <span>{this.props.option2}</span>
                    </label>
                </fieldset>
            </div>
        );
    }
}


Toggle.propTypes = {
    labelText: PropTypes.string.isRequired,
    option1: PropTypes.string,
    option2: PropTypes.string,
    defaultValue: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
    option1: 'True',
    option2: 'False',
    defaultValue: true
};

export default Toggle;
