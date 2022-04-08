import { useState } from "react"
const Movies = ()=>{
const [moviesdata,setMovieData] = useState({
    moviename:"fast & furious 1",
    rating:4,
    releaseDate:""
},

{

    moviename:"fast & furious 2",
    rating:4,
    releaseDate:""
},

{

    moviename:"fast & furious 3",
    rating:4,
    releaseDate:""
},



{

    moviename:"fast & furious 4",
    rating:4,
    releaseDate:""
},


{

    moviename:"fast & furious 5",
    rating:4,
    releaseDate:""
},


{

    moviename:"fast & furious 6",
    rating:4,
    releaseDate:""
},


{

    moviename:"fast & furious 7",
    rating:4,
    releaseDate:""
},
{

    moviename:"fast & furious 8",
    rating:4,
    releaseDate:""
},

{

    moviename:"fast & furious 9",
    rating:4,
    releaseDate:""
},
{

    moviename:"fast & furious 10",
    rating:4,
    releaseDate:""
},
{

    moviename:"iron-man 1",
    rating:4,
    releaseDate:""
},
{

    moviename:"iron-man 2",
    rating:4,
    releaseDate:""
},
{

    moviename:"iron-man 3",
    rating:4,
    releaseDate:""
},{

    moviename:"iron-man 4",
    rating:4,
    releaseDate:""
},
{

    moviename:"spider-man 1",
    rating:4,
    releaseDate:""
},
{

    moviename:"spider-man 2",
    rating:4,
    releaseDate:""
},
{

    moviename:"spider-man 3",
    rating:4,
    releaseDate:""
},
{

    moviename:"spider-man 4",
    rating:4,
    releaseDate:""
},
{

    moviename:"avengers 1",
    rating:4,
    releaseDate:""
},
{

    moviename:"avengers 2",
    rating:4,
    releaseDate:""
},


)


return(
    <div>
        <h1>from movie page</h1>
        {
            setMovieData.length>0 && moviesdata.map((e)=>{
            <div>
                <p>{e.moviesdata}</p>
                <p>{e.rating}</p>
                <p>{e.releaseDate}</p>



            </div>
                
                
                })



        }



    </div>




)

}
export default Movies