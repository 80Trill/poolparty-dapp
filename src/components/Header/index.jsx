import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../utility/elements/Logo';

import styles from './styles.scss';


/**
 * Header component; contains project logo, and user's current balance if applicable
 * @param props
 * @returns {*}
 * @constructor
 */
function Header(props) {
    const logoTitle = 'Click to reload page';

    return (
        <div className={styles.container} style={{ zIndex: 2 }}>
            <div className={styles['pool-information']}>
                {props.poolAddress &&
                    <React.Fragment>
                        <figure>
                            <figcaption>Pool ID:</figcaption>
                            <span>{props.poolId}</span>
                        </figure>

                        <figure>
                            <figcaption>Pool State:</figcaption>
                            <span>{props.poolState}</span>
                        </figure>
                    </React.Fragment>
                }
            </div>

            <div className={styles.logo}>
                <Logo
                    role="button"
                    title={logoTitle}
                    aria-label={logoTitle}
                    style={{ cursor: 'pointer' }}
                    onClick={() => window.location.reload()}
                />
            </div>

            {!props.asAdmin && props.poolAddress &&
                <div className={styles['user-balance']}>
                    <figure>
                        <figcaption>My ETH Contributed</figcaption>
                        <span>{props.userBalance || 0}</span>
                    </figure>
                </div>
            }
        </div>
    );
}


Header.propTypes = {
    poolAddress: PropTypes.string.isRequired,
    poolId: PropTypes.number,
    poolState: PropTypes.string,
    asAdmin: PropTypes.bool.isRequired,
    userBalance: PropTypes.number,
    clearCurrentPool: PropTypes.func
};

export default Header;
