import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state.text);

        // Form validation in case of empty input text
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {
            // Passing the text in state up as a prop to App for querying
            // custom function searchUsers
            this.props.searchUsers(this.state.text);
            // Clear form input after
            this.setState({ text: '' });
        }    
    };


    render() {
        const { showClearBtn, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..."
                        value={this.state.text} 
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {/*show button if showClearbtn is set to true ie if there are users displayed  */}
                {showClearBtn && (<button className="btn btn-light btn-block" onClick={clearUsers}> Clear </button>) }
                
            </div>
        );
    };
};

export default Search;
