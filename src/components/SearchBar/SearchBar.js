import React from 'react';

class SearchBar extends React.Component {
    render(){
        return (
        <div className="ui segment">
            <form className="ui form">
                <label htmlFor="search" className="ui label">Image Search</label>
                <input type="text" className="field" id="search" name="search"></input>
            </form>
        </div>
        );
    }
}

export default SearchBar;