import React from 'react';
import PropTypes from 'prop-types';

import Token from 'Components/Tokens/Token';

import styles from './styles.scss';

/**
 * Display a decorative arrow, varying based on how many tokens are attached to the pool and viewport width.
 * @param {number} numberOfTokens - how many tokens are attached to the pool
 * @param {number} viewportWidth
 * @return {*}
 */
function decorativeArrow(numberOfTokens, viewportWidth) {
    const lineAttributes = {
        fill: 'none',
        stroke: 'currentColor',
        strokeDasharray: 4,
        strokeDashoffset: 5,
        strokeLinecap: 'round',
        markerEnd: 'url(#ArrowPoint)'
    };

    return (
        <svg viewBox="0 0 400 50" aria-hidden="true" width="530" overflow="visible">
            <defs>
                <marker id="ArrowPoint" viewBox="0 0 10 8" refX="5" refY="1" markerWidth="10" markerHeight="8">
                    <polygon points="5 6, 2 2, 8 2" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
                </marker>

            </defs>

            {numberOfTokens === 1 || viewportWidth < 1040 ?
                <line x1={200} y1={0} x2={200} y2={50} {...lineAttributes} />

                :

                <g>
                    <path d={'M200,0 200,20 Q200,30 220,30 L390,30 Q400,30 400,40 400,50 400,50'} {...lineAttributes} />
                    <path d={'M200,0 200,20 Q200,30 220,30 L390,30 Q400,30 400,40 400,50 400,50'} {...lineAttributes} transform={'scale(-1,1) translate(-400,0)'}/>
                </g>
            }
        </svg>
    );
}

/**
 * Displays information about the tokens associated with a completed pool.
 */
function Tokens(props) {
    return (
        <React.Fragment>
            <div className={styles.heading}>
                <h2>Tokens</h2>

                {decorativeArrow(props.tokenAddress.length, window.innerWidth)}
            </div>

            <div className={styles['cards-container']}>
                {props.tokenAddress.map(token => (
                    <Token
                        key={token}
                        address={token}
                        name={props.tokenName[token] || ''}
                        balance={props.adminView ? props.tokenBalanceContract[token] : props.totalTokensUserCanClaim[token]}
                        claimed={props.adminView ? props.totalTokensDistributed[token] : props.totalTokensUserHasClaimed[token]}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}


Tokens.propTypes = {
    adminView: PropTypes.bool.isRequired,
    tokenAddress: PropTypes.arrayOf(PropTypes.string),
    tokenBalance: PropTypes.object,
    tokenBalanceContract: PropTypes.object,
    totalTokensUserHasClaimed: PropTypes.object,
    tokenName: PropTypes.object,
    tokenDecimal: PropTypes.object,
    totalTokensDistributed: PropTypes.object,
    totalTokensUserCanClaim: PropTypes.object,
    totalTokens: PropTypes.object
};

export default Tokens;
