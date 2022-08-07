import React from "react";

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
            <button
              type="button"
              className="btn btn-nd btn-danger"
              style={{ float: 'rightx' }}
            >
              Add Movie
            </button>
          </div>
        </div>
      </form>
    );
  }
}


export default SearchBar;