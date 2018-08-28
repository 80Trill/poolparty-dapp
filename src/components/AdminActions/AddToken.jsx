import React from 'react';
import PropTypes from 'prop-types';

import SubmitTextInput from 'Components/utility/inputs/SubmitTextInput';


function AddToken(props) {
    return (
        <div>
            <p>Do you have tokens and are ready to distribute? Add the token address below.</p>

            <SubmitTextInput labelText={'Token Address'} placeholderText={'Token Address'} onSubmit={props.addToken} />
        </div>
    );
}


AddToken.propTypes = {
    addToken: PropTypes.func.isRequired
};

export default AddToken;
