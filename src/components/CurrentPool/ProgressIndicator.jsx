import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';

import styles from './styles.scss';


/**
 * Displays progress given a percentage. Can also supply altValue to be shown in the center when that and the percentage vary.
 */
class ProgressIndicator extends React.Component {
    constructor(props) {
        super(props);

        this.diameter = props.diameter;
        this.circumference = Math.PI * (this.diameter / 2);

        this.styleSheetEl = document.createElement('style');
        this.styleSheetEl.type = 'text/css';

        document.head.appendChild(this.styleSheetEl);
    }

    returnArcLength() {
        return Math.floor(this.props.progressPercentage / 100 * this.circumference);
    }

    returnAnimationStyles() {
        return `
            @keyframes drawProgress {
                to {
                    stroke-dashoffset: ${this.circumference - this.returnArcLength()}px;
                } 
            }
            
            circle[class="indicator-arc"] {
                animation-name: drawProgress;
                animation-delay: 0.5s;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
        `;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.progressPercentage !== this.props.progressPercentage) {
            this.styleSheetEl.innerHTML = this.returnAnimationStyles();
        }
    }

    componentDidMount() {
        this.styleSheetEl.innerHTML = this.returnAnimationStyles();
    }

    render() {
        const displayValue = this.props.altValue ? +this.props.altValue.toFixed(3) : +this.props.progressPercentage.toFixed(2);

        const tooltipId = `roundingInfo${this.props.labelText.split(' ')[0]}`;

        return (
            <div className={styles.indicator} style={{
                position: "relative",
                width: this.diameter,
                height: this.diameter,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <svg viewBox="0 0 101 101" width="100%" overflow="visible" style={{ position: "absolute", left: 0, top: 0 }}>
                    <defs>
                        <linearGradient id="BackgroundGradient" gradientUnits="userSpaceOnUse" gradientTransform="rotate(125,50,50)">
                            <stop offset="60%" stopColor="#e2e5f0" />
                            <stop offset="100%" stopColor="#fefefe" />
                        </linearGradient>

                        <linearGradient id="ProgressGradient" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45,50,50)">
                            <stop offset="40%" stopColor="#f8c382" />
                            <stop offset="80%" stopColor="#f88982" />
                        </linearGradient>
                    </defs>

                    <circle cx="50" cy="50" r="50" fill="url(#BackgroundGradient)" />
                    <circle cx="50" cy="50" r="47" fill="#fff" />

                    <circle
                        transform="rotate(-90,50,50)"
                        className="indicator-arc"
                        cx="50" cy="50" r="49" fill="none"
                        stroke="url(#ProgressGradient)" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={this.circumference}
                        strokeDashoffset={this.circumference}
                    />
                </svg>

                <figure style={{ zIndex: 1 }}>
                    <span data-tip data-for={tooltipId}>
                        {displayValue}{this.props.showPct && '%'}
                    </span>

                    <figcaption>{this.props.labelText}</figcaption>

                    <ReactTooltip
                        id={tooltipId}
                        type={'light'}
                        place={'bottom'}
                    >
                        Displayed value may be rounded to {this.props.showPct ? 'two' : 'three'} decimal places
                    </ReactTooltip>

                </figure>
            </div>
        );
    }
}


ProgressIndicator.propTypes = {
    diameter: PropTypes.number,
    labelText: PropTypes.string.isRequired,
    progressPercentage: PropTypes.number,
    showPct: PropTypes.bool.isRequired,
    altValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProgressIndicator.defaultProps = {
    diameter: 200,
    altValue: null,
    progressPercentage: 0
};

export default ProgressIndicator;
