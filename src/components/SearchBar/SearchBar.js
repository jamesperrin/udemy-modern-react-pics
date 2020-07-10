import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (evt) =>{
        evt.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label htmlFor="SearchTerm" className="ui label">Image Search</label>
                    <input type="text" className="field" id="SearchTerm" name="SearchTerm"
                        value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;