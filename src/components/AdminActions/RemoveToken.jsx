import React from 'react';
import PropTypes from 'prop-types';

import SubmitTextInput from 'Components/utility/inputs/SubmitTextInput';


function RemoveToken(props) {
    return (
        <div>
            <p>Did you add a wrong token address? Add the token address below to remove it from the pool.</p>

            <SubmitTextInput labelText={'Token Address'} placeholderText={'Token Address'} onSubmit={props.removeToken} />
        </div>
    );
}


RemoveToken.propTypes = {
    removeToken: PropTypes.func.isRequired
};

export default RemoveToken;
