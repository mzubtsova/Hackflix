// step18 creating new component
//step19 import axios
import axios from "axios";


//step20 import useState and useEffect
import { useEffect, useState } from 'react';

//step25 we want to use movie is which is currently in movie url(at which this component renders) within our axios. In order to grab information from URL (when using router) we can useParams Hook
import { useParams } from 'react-router-dom';


function MovieInfo(props) {

    // step26 lets call the useParams Hook what it returns

    console.log(props);

    //step27 call the useParams Hook and extract the movie id property from within the params object it returns

    const { movieId: movie_id } = useParams();

    //step21 initialize state to represent movie details which will be returned to us from the API
    const [details, setDetails] = useState({});

    //step22 define a side affect which will fetch the data about the movie id endpoint
    useEffect(function () {

        //step23 use axios to make a request to the movie id endpoint
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: 'e3b22188fe6ead26fbdd26da8e3f46f8',
            }
        }).then(function (movieInfo) {
            console.log(movieInfo);
            //step28 use the API data and  update state
            setDetails(movieInfo.data)
        })

        //step24 specify that this side effect should run only one time
    }, [movie_id]);

    return(
        // step28 loading data on the page
        <section className="poster">
            <div className="description">
                {/* render the movie tagline, summary, and title */}

                <h3>{details.tagline}</h3>
                <h2>{details.title}</h2>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                {/* render the movie poster */}
                 <img 
                    src={ details.poster_path ?  `https://image.tmdb.org/t/p/w500${details.poster_path}` : ""} 
                    alt={`a movie poster for ${details.original_title}`} 
                    />

            </div>
        </section>
    )
}
export default MovieInfo;