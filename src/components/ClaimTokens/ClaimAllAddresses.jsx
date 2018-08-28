import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';


function ClaimAllAddresses(props) {
    return (
        <div>
            <p style={{ marginBottom: '2em' }}>Want to be nice and pay to claim all of your users' tokens for them?</p>

            <Button
                width={'100%'}
                text={'Claim All'}
                onClick={props.claimAllAddresses}
            />
        </div>
    );
}


ClaimAllAddresses.propTypes = {
    claimAllAddresses: PropTypes.func.isRequired
};

export default ClaimAllAddresses;
