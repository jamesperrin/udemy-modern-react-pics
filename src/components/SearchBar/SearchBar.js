import React from 'react';

class SearchBar extends React.Component {
    onInputChange(evt){
        console.log(evt.target.value);
    }

    render(){
        return (
        <div className="ui segment">
            <form className="ui form">
                <label htmlFor="search" className="ui label">Image Search</label>
                <input type="text" className="field" id="search" name="search" onChange={this.onInputChange}></input>
            </form>
        </div>
        );
    }
}

export default SearchBar;