import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';
import CompareMinMax from 'Components/utility/inputs/CompareMinMax';


class SetMinMaxContribution extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maxContribution: '',
            minContribution: '',
            isValid: true
        };

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(min, max, validity) {
        this.setState({
            minContribution: min,
            maxContribution: max,
            isValid: !validity.length
        });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.minContribution, this.state.maxContribution);
    }


    render() {
        return (
            <div>
                <CompareMinMax handleChanges={this.handleChanges} />

                <Button
                    width={'100%'}
                    onClick={this.handleSubmit}
                    isDisabled={!this.state.isValid}
                />
            </div>
        );
    }
}


SetMinMaxContribution.propTypes = {
    onSubmit: PropTypes.func.isRequired
};


export default SetMinMaxContribution;
