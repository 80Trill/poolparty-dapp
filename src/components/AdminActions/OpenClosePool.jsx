import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';

import styles from './styles.scss';


function OpenClosePool(props) {
    return (
        <div className={styles['text-with-button']}>
            {props.poolState === 'Closed' ?
                <p>
                    Need to collect more ETH?<br/>
                    Select <strong>open pool</strong> below.
                </p>

                :

                <p>Ready to {props.isOwner ? 'send the ETH and' : ''} close the pool?</p>
            }

            <Button
                width={'100%'}
                text={props.poolState === 'Closed' ? 'Open Pool' : 'Close Pool'}
                onClick={props.toggleState}
            />
        </div>
    );
}


OpenClosePool.propTypes = {
    isOwner: PropTypes.bool.isRequired,
    poolState: PropTypes.string.isRequired,
    toggleState: PropTypes.func.isRequired
};

export default OpenClosePool;
