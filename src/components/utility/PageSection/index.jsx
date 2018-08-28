import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


function sectionUpperCurves() {
    const positionStyling = {
        position: 'absolute',
        top: 0,
        left: 0
    };

    return (
        <svg viewBox={`0 0 1000 100`} width="100%" style={positionStyling} overflow="visible" aria-hidden="true">

            <path d="M 0,0 V 30 Q 100,80 400,30 T 1000,40 V 0 H 1000" fill={'rgba(255, 255,255, 1)'} />

            <path d="M 0,0 V 40 Q 150,90 350,50 T 1000,50 V 0 H 1000" fill={'rgba(255, 255, 255, 0.5)'} />

            <path d="M 0,0 V 30 Q 150,100 500,50 T 1000,40 V 0 H 1000" fill={'rgba(255, 255, 255, 0.5)'} />
        </svg>
    );
}

function sectionLowerCurves() {
    const positionStyling = {
        position: 'absolute',
        bottom: '-1px',
        left: 0
    };

    return (
        <svg viewBox={`0 0 1000 100`} width="100%" style={positionStyling} overflow="visible" aria-hidden="true">

            <path d="M 1000,100 H 0 V 30 Q 150,80 350,50 T 1000,60" fill={'rgba(255, 255,255, 0.5)'} />

            <path d="M 1000,100 H 0 V 0 Q 80,70 500,50 T 1000,50" fill={'rgba(255, 255, 255, 0.5)'} />

            <path d="M 1000,100 H 0 V 40 Q 150,90 500,60 T 1000,70" fill={'rgba(255, 255, 255, 1)'} />
        </svg>
    );
}


/**
 * General presentational component for application sections.
 * @param props
 * @returns {*}
 * @constructor
 */
function PageSection(props) {
    const getBackgroundClassName = () => {
        if (!props.hasBackground) return 'container';

        if (props.hasGradient) {
            return 'styled-gradient-container';
        }

        return 'styled-container';
    };

    const containerStyling = () => {
        let containerStyles = {
            position: 'relative'
        };

        if (props.hasTopCurves) containerStyles.paddingTop = '4rem';

        if (props.hasBottomCurves) containerStyles.paddingBottom = '6rem';

        return containerStyles;
    };


    return (
        <section className={`${styles[getBackgroundClassName()]} ${props.className}`} style={containerStyling()}>
            {props.hasTopCurves && sectionUpperCurves()}

            <div className={styles.content}>{props.children}</div>

            {props.hasBottomCurves && sectionLowerCurves()}

        </section>
    );
}


PageSection.propTypes = {
    hasBackground: PropTypes.bool,
    hasGradient: PropTypes.bool,
    hasTopCurves: PropTypes.bool,
    hasBottomCurves: PropTypes.bool,
    className: PropTypes.string
};

PageSection.defaultProps = {
    hasBackground: false,
    hasGradient: false,
    hasTopCurves: false,
    hasBottomCurves: false
};

export default PageSection;
