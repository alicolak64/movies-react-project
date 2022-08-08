import React from "react";

import { Link } from "react-router-dom";

// import './MovieList.css';

const MovieList = (props) => {    // If a component is a stateless functional component, it can be written as a function.


    // function handleClick (event) {
    //     console.log(event);
    //     console.log("Clicked on: " + event.name);
    // }


    const trucateOverview = (string , maxLength) => {
        
        if (!string) {
            return null;
        } else if(string.length > maxLength) {
            return string.substring(0, maxLength) + "...";
        } else {
            return string;
        }

    }




    return ( // Local Api
        <div className="row">   

 
            {props.movies.map((movie , i) => (
                <div className="col-lg-4" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img
                            src={movie.imageURL}
                            className="card-img-top"
                            alt={movie.name}
                        />
                        <div className="card-body">
                            <h4 className="card-title">
                                {movie.name}
                            </h4>
                            <p className="card-text">
                                {trucateOverview(movie.overview, 200)}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={
                                    (event) => {
                                        props.deleteMovieProp(movie);
                                    }
                                } className="btn btn-md btn-outline-danger">
                                    Delete
                                </button>
                                <Link 
                                type="button" 
                                className="btn btn-md btn-outline-primary" 
                                to={`editMovie/${movie.id}`}>
                                    Edit
                                </Link>
                                <h2>
                                    <span className="badge bg-info">
                                    {movie.rating % 1 === 0 ? movie.rating + ".0" : movie.rating}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default MovieList;