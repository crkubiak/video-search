import React, { Component } from "react";
import "./VideoItem.css";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    //TO DO: mkae sure we call callback form parent component
    this.props.onFormSubmit(this.state.term);
    //parent component is being told what the search term is
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "2%" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search for Videos!</label>
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
