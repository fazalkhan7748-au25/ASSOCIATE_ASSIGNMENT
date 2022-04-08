import React from "react";
import { useState } from "react";
import Axios from "axios"
const Create = ()=>{
    const [formData,setFormData]= useState({
        movie:"",
        rating:"",
        release:""
    })
    const onChange=(e)=>{
        e.preventDefault();
        setFormData((prevstate)=>({...prevstate,[e.target.name]:e.target.value})) 
        
    }

    const {movie,releaseDate,rating}=formData
    const onSubmit =(e)=>{
        e.preventDefault()
         const userData = {
             movie,
             releaseDate,
             rating
         }

         console.log(userData)
         Axios.post("http://localhost:8000/movieservice",userData)
        
    }


return(
    <div>
        <form onSubmit = {onSubmit}>

        <label>MovieName</label>
        <input type ="text" name="movie" value={movie} onChange={onChange}></input>
        <label>ReleaseDate</label>
        <input type ="text" name="releaseDate" value={releaseDate} onChange={onChange}></input>
        <label>Ratings</label>
        <input type ="number" name="rating" value={rating} onChange={onChange}></input>
        <button> Submit</button>








        </form>




    </div>
)

}
export default Create