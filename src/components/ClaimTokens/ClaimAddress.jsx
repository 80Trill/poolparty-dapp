import React from 'react';
import PropTypes from 'prop-types';

import SubmitTextInput from 'Components/utility/inputs/SubmitTextInput';


function ClaimAddress(props) {
    const label = 'User’s Wallet Address';

    return (
        <div>
            <p>Have a user who can’t figure out how to claim their tokens?</p>

            <SubmitTextInput labelText={label} placeholderText={label} onSubmit={props.claimAddress} />
        </div>
    );
}


ClaimAddress.propTypes = {
    claimAddress: PropTypes.func.isRequired
};

export default ClaimAddress;
