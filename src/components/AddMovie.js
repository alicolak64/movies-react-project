import React from 'react'

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import serialize from 'form-serialize';




const AddMovie = (props) => {

    let navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        const newMovie = serialize(e.target, { hash: true });
        props.onAddMovie(newMovie);
        navigate("/")
    };

    return (
        <div className="container" style={
            {
                height:"100%" ,
                margin : "0 auto", 
                verticalAlign:"middle",
                align:"center" ,
                horizontalAlign:"center"
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
              to={{ pathname: "/"}}
              type="button"
              className="btn btn-nd btn-info"
              style={{ float: 'left' }}
            >
              Back
            </Link>
                </div>
                <div className='col-lg-11'>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
            </div>
            </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
    )
}

export default AddMovie
