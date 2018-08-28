import React from 'react';
import PropTypes from 'prop-types';

import SubmitTextInput from 'Components/utility/inputs/SubmitTextInput';


function ClaimReimbursement(props) {
    const label = 'User’s Wallet Address';

    const claimReimbursement = (address) => {
        props.claimReimbursement(address);
    };

    return (
        <div>
            <p>Claim a reimbursement for {props.asAdmin ? 'a' : 'another'} user.</p>

            <SubmitTextInput
                labelText={label}
                buttonText={'Claim'}
                placeholderText={label}
                onSubmit={claimReimbursement}
            />
        </div>
    );
}

ClaimReimbursement.propTypes = {
    asAdmin: PropTypes.bool.isRequired,
    claimReimbursement: PropTypes.func.isRequired
};

export default ClaimReimbursement;
