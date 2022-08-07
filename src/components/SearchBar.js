import React from "react";

import { Link } from "react-router-dom";

// import './SearchBar.css';

class SearchBar extends React.Component {

  // state = {
  //   search : ""
  // };

  handleFormSubmit = (event) => {
    event.preventDefault()
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search a movie"

              // onChange = { 
              //   (event) => {
              //     this.setState({
              //       search : event.target.value
              //     });
              //   }
              // }
              // value = {this.state.search}

              onChange={this.props.searchProp}
            />
          </div>
          <div className="col-2">
            <Link
              to={{ pathname: "/addMovie"}}
              type="button"
              className="btn btn-nd btn-danger"
              style={{ float: 'right' }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}


export default SearchBar;