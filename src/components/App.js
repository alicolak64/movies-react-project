import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';


/*
HTTP Method


Get -> For get data
Post -> For add data
Put -> For update data
Patch -> For update data
Delete -> For delete data

*/

// Postman -> Use for http request

class App extends React.Component {
  
  state = {

    // Fetch -> Fetch is a JavaScript function that allows us to perform asynchronous network queries and returns a promise back to us.

    movies : [

    ] ,
    
    search : ""



  }


  async componentDidMount () {
    const baseUrl = "http://localhost:3002/movies";
    const response = await fetch(baseUrl);   // response is a promise
    const data = await response.json();
    // console.log(data);
    this.setState({
      movies : data
    });
  }


  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    // this.setState({     // Use this in first state assign operation
    //   movies : newMovieList
    // });

    this.setState( state => ({   // Use this in update state operation
      movies : newMovieList
    }));               


  }

  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState( {
      search : event.target.value
    })
  }


  render () {   // use only view operation

    let filteredMovies = this.state.movies.filter (
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.search.trim().toLowerCase()) !== -1
      }
    )

    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <SearchBar 
                  searchProp = {this.searchMovie}
                  />
              </div>
          </div>

          <MovieList 
          movies = {filteredMovies}
          deleteMovieProp = {this.deleteMovie}
            />
      </div>
  );
  }

}


export default App;
