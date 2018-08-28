import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';


function ClaimOwnReimbursement(props) {
    const claimReimbursement = () => {
        props.claimReimbursement(props.userAccount);
    };

    return (
        <div>
            <p style={{ marginBottom: '2em' }}>Claim your reimbursement.</p>

            <Button
                width={'100%'}
                text={'Claim'}
                onClick={claimReimbursement}
            />
        </div>
    );
}

ClaimOwnReimbursement.propTypes = {
    userAccount: PropTypes.string.isRequired,
    claimReimbursement: PropTypes.func.isRequired
};

export default ClaimOwnReimbursement;
