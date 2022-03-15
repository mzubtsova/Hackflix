// step2creating movie catalogue component

// api key e3b22188fe6ead26fbdd26da8e3f46f8

// step8 import axios library
import axios from "axios";
//step9 import the useState and UseEffect hooks
import { useEffect, useState } from 'react';
//step15 in order to recreate the behaviour of an anchor with the added benefit/logic of React router, we can use the Link component
import { Link } from 'react-router-dom';

function MovieCatalogue() {

    console.log('Catalogue has rendered');
    //step10 initialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([]);

    //step11 initialize useEffect to run the side affect of fetching data from the movie api (side affect is running a single time on page load)
    useEffect(function () {

        console.log('side effect is running');
        //step12 make an asynchronous request to the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:'e3b22188fe6ead26fbdd26da8e3f46f8',
                include_adult: false
            }
        }).then(function (showMeTheMovies) {
            console.log(showMeTheMovies);
           

            //step13 to save the returned data within state
            setMovies(showMeTheMovies.data.results);
        })

    }, [] );

    
    return(
        <section>
        <h2>Here are your viewing options:</h2>
            <ul className="catalogue">
             {/* step14 map through state and return movie for each movie present in the returned API data  */}
            {
                    movies.map(function (movie) {
                        return (
                        // step16 we want to make the posters clickable and navigate to a unique URL to represent each specific movie
                            <Link to={`/${movie.id}`} key={movie.id}>
                                <li>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={`A poster for the movie ${movie.title}`}
                                    />
                                </li>
                            </Link>
                        )
                    })
                }

            </ul>
        </section>
    )
}

export default MovieCatalogue;