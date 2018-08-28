import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/utility/elements/Button';

import styles from './styles.scss';


function CancelPool(props) {
    return (
        <div className={styles['text-with-button']}>
            <p>
                <span className={styles['warn-text']} style={{ width: '90%' }}>Didn’t work out? Need to cancel the pool?</span>
                <strong>Warning this is irreversible!</strong>
            </p>

            <Button
                width={'100%'}
                text={'Cancel Pool'}
                onClick={props.cancelPool}
            />
        </div>
    );
}


CancelPool.propTypes = {
    cancelPool: PropTypes.func.isRequired
};

export default CancelPool;
