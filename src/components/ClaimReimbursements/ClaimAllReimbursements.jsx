import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';


function ClaimAllReimbursements(props) {
    return (
        <div>
            <p style={{ marginBottom: '2em' }}>Claim a reimbursement for every user.</p>

            <Button
                width={'100%'}
                text={'Claim All'}
                onClick={props.claimAllReimbursements}
            />
        </div>
    );
}

ClaimAllReimbursements.propTypes = {
    claimAllReimbursements: PropTypes.func.isRequired
};

export default ClaimAllReimbursements;
