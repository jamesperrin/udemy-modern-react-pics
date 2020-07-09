import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <label htmlFor="SearchTerm" className="ui label">Image Search</label>
                    <input type="text" className="field" id="SearchTerm" name="SearchTerm"
                        value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;