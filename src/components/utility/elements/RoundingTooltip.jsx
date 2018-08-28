import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';


// note: you will still need to import ReactTooltip for the component that calls this component
function RoundingTooltip(props) {
    return (
        <ReactTooltip
            id={props.id}
            type={'light'}
            place={'bottom'}
        >
            Displayed value may be rounded to three decimal places
        </ReactTooltip>
    );
}


RoundingTooltip.propTypes = {
    id: PropTypes.string
};

export default RoundingTooltip;
