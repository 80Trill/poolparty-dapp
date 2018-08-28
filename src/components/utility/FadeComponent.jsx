import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';


/**
 * Wrapper component to fade a child component in and/or out as it is mounted/unmounted
 * @param {boolean} inProp - property which controls whether or not this component should be mounted
 * @param {*} children
 * @returns {*}
 * @constructor
 */
function FadeComponent({ in: inProp, children }) {
    return (
        <CSSTransition
            in={inProp}
            timeout={2000}
            unmountOnExit={true}
            classNames={'fadeComponent'}
        >
            {children}
        </CSSTransition>
    );
}


FadeComponent.propTypes = {};

export default FadeComponent;
