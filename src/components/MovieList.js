import React from "react";

// import './MovieList.css';

const MovieList = (props) => {    // If a component is a stateless functional component, it can be written as a function.


    // function handleClick (event) {
    //     console.log(event);
    //     console.log("Clicked on: " + event.name);
    // }



    return ( // Local Api
        <div className="row">   


            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img
                            src={movie.imageURL}
                            className="card-img-top"
                            alt={movie.name}
                        />
                        <div className="card-body">
                            <h3 className="card-title">
                                {movie.name}
                            </h3>
                            <p className="card-text">
                                {movie.overview}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={
                                    (event) => {
                                        props.deleteMovieProp(movie);
                                    }
                                } className="btn btn-md btn-outline-danger">
                                    Delete
                                </button>
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