import React from 'react';
import PropTypes from 'prop-types';



// passed in a single repo from within it's props
const RepoItem = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}> {repo.name} </a>
            </h3>
        </div>
    )
}

// Proptypes
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;