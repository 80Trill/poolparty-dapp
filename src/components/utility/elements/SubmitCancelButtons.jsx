import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import styles from './styles.scss';


function SubmitCancelButtons(props) {
    return (
        <div className={styles['submit-cancel-buttons']}>
            <Button
                isDisabled={props.isDisabled}
                text={props.submitText}
                onClick={props.handleSubmit}
            />

            <Button
                isPrimary={false}
                text={props.cancelText}
                onClick={props.handleCancel}
            />
        </div>
    );
}


SubmitCancelButtons.propTypes = {
    submitText: PropTypes.string,
    cancelText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool
};

SubmitCancelButtons.defaultProps = {
    submitText: 'Submit',
    cancelText: 'Cancel',
    isDisabled: false
};

export default SubmitCancelButtons;
