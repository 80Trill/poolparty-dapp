import React from 'react';
import PropTypes from 'prop-types';

import SubmitNumberInput from 'Components/utility/inputs/SubmitNumberInput';

import styles from './styles.scss';


function ProjectReimbursement(props) {
    return (
        <div>
            <p>
                <span className={styles['warn-text']}>Didn’t work out? Need to reimburse everyone?</span>

                <strong>Warning this equally distributes ETH based on the user’s contribution size.</strong>
            </p>

            <SubmitNumberInput labelText={'ETH Amount'} placeholderText={'ETH Amount'} onSubmit={props.handleSubmit} />
        </div>
    );
}


ProjectReimbursement.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ProjectReimbursement;
