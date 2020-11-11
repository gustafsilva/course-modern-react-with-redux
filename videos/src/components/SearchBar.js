import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: '',
    }

    onInputChange = event => {
        this.setState({
            term: event.target.value,
        });
    }

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field video-search">
                        <label htmlFor="video-search">Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
