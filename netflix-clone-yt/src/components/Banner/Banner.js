import axios from '../firebase/localaxios'
import React, { useEffect, useState } from 'react'
import "../../css/banner.css"
import userrequests from '../firebase/Request'
function Banner() {
    const [movie, setMovie] = useState([])
// this for display data in home page 
    useEffect(()=>{
            async function fetchData() {
                const request = await axios.get(userrequests.fetchNetflixOriginals);
                //console.log(request.data.results[0])
                //  refresh a page, randomly change the data 
                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])

            }

            fetchData();
    },[])
    return (
         <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, 
         backgroundPosition:'center', backgroundSize:'cover' }}>
            <div className="banner_content">
                <h1 className="banner_title">

                    {movie?.title || movie?.origital_name||  movie?.name}
                </h1>

                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>

                <div className="banner_description">
                    <p>
                        
                    {movie?.overview}
                    </p>
                </div>
            </div>

            <div className="banner_fade"></div>
        </div>
    )
}

export default Banner;