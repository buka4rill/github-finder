// Map through repos that are passed in

import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


// Pass in repos props
const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

// Proptypes
Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos;