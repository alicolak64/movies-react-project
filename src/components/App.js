import React from 'react';

import axios from 'axios';

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

  // Fetch -> Fetch is a JavaScript function that allows us to perform asynchronous network queries and returns a promise back to us.

  // Axios -> Axios is a JavaScript library that allows us to make HTTP requests from our JavaScript code.

  state = {
    movies: [],
    search: ""
  }

  // async componentDidMount () {   // Fetch method with Local Api
  //   const baseUrl = "http://localhost:3002/movies";
  //   const response = await fetch(baseUrl);   // response is a promise
  //   const data = await response.json();
  //   // console.log(data);
  //   this.setState({
  //     movies : data
  //   });
  // }

  async componentDidMount () {  // Axios method Local Api   // axios dowload npm i axios

    const baseUrl = "http://localhost:3002/movies";
    // create-json server json-server --watch src/api/movies.json --port 3002
    const response = await axios.get(baseUrl);
    // console.log(response.data);
    const data = response.data;
    // console.log(data);
    this.setState({
      movies : data
    });
  }



  //  deleteMovie = async (movie) => {   // Fetch method 
  //   const baseUrl = "http://localhost:3002/movies/" + movie.id;
  //   //const baseUrl2 = `http://localhost:3002/movies/${movie.id}`;

  //   await fetch(baseUrl, {
  //     method : "DELETE"
  //   });

  //   const newMovieList = this.state.movies.filter(
  //     m => m.id !== movie.id
  //   );
  //   // this.setState({     // Use this in first state assign operation
  //   //   movies : newMovieList
  //   // });

  //   this.setState( state => ({   // Use this in update state operation
  //     movies : newMovieList
  //   }));               
  // }

  deleteMovie = async (movie) => {   // Axios method 
    const baseUrl = "http://localhost:3002/movies/" + movie.id;
    //const baseUrl2 = `http://localhost:3002/movies/${movie.id}`;

    await axios.delete(baseUrl);

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    // this.setState({     // Use this in first state assign operation
    //   movies : newMovieList
    // });

    this.setState(state => ({   // Use this in update state operation
      movies: newMovieList
    }));
  }


  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter(
  //     m => m.id !== movie.id
  //   );
  //   // this.setState({     // Use this in first state assign operation
  //   //   movies : newMovieList
  //   // });

  //   this.setState( state => ({   // Use this in update state operation
  //     movies : newMovieList
  //   }));               
  // }

  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }


    render () {   // use only view operation    //Local Api

      let filteredMovies = this.state.movies.filter (
        (movie) => {
          return movie.name.toLowerCase().indexOf(this.state.search.trim().toLowerCase()) !== -1
        }
      )

      return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <br />
                    <br />
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
