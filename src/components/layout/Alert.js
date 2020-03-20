import React from 'react';

// Takes in the alert object
const Alert = ({ alert }) => {
    return (
        // Make sure the alert is not null
        // If alert is not empty, do this statement
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i>
                &nbsp;
                { alert.msg }
            </div>
        )
    )
}

export default Alert;