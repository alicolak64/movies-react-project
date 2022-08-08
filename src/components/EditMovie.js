import React from 'react'

import { useState , useEffect } from 'react';

import { useNavigate , Link , useParams } from "react-router-dom";

import axios from 'axios';


const EditMovie = () => {

    const [ name , setName ] = useState(" ")
    const [ overview , setOverView ] = useState(" ")
    const [ rating , setRating ] = useState(" ")
    const [ imageURL , setImageURL ] = useState(" ")

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        

        const baseUrl = "http://localhost:3002/movies";


        // declare the data fetching function
        const fetchData = async () => {

        

            const response = await axios.get( baseUrl + "/" + id );

            const data = response.data;

            console.log(data)

            setName(data.name);
            setOverView(data.overview);
            setRating(data.rating);
            setImageURL(data.imageURL);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        // console.log(e)
        // const newMovie = serialize(e.target, { hash: true });
        // props.onAddMovie(newMovie);
        // navigate("/")
    };

    return (
        <div className="container" style={
            {
                height: "100%",
                margin: "0 auto",
                verticalAlign: "middle",
                align: "center",
                horizontalAlign: "center"
            }
        }>
            <form className="mt-5" onSubmit={handleFormSubmit}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className='col-lg-1'>
                        <Link
                            to={{ pathname: "/" }}
                            type="button"
                            className="btn btn-nd btn-info"
                            style={{ float: 'left' }}
                        >
                            Back
                        </Link>
                    </div>
                    <div className='col-lg-11'>
                        <input className="form-control" id="disabledInput" type="text" placeholder="EDIT The Form To UPDATE A Movie.." disabled />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value = {name} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value = {rating} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value = {imageURL} />
                    </div>
                </div>
                <div className="form-row"> 
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview"
                            value = {overview}
                            rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
    )
}

export default EditMovie
