
import './index.css';
import Header from './Header';
// step6 import 2 pieces(Routes,Route) from the Router library which will allow us to configue the routers within this app
import { Routes, Route } from 'react-router-dom';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';




// step1 update function
function App() {
  return (
    <div className='wrapper'>
      {/* this app consists of 3 components */}
      {/* header component */}
      <Header heading={"Hackflix"} />
      {/* step7 now we need to define our routing configuration(this is often done within the app components) */}

      {/* step7.1 use the routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL paths */}
      <Routes>
        {/* step7.2 define the individual routes/ URL paths which available within your app, as well as the components which are visible at those paths */}

        {/* here is where you will define which component is visible at what path */}

        <Route path="/" element={<MovieCatalogue />} />

        {/* step 19 the movie info component should be shown when the route looks like "www.homepage.com/movieIdhere" */}
        <Route path="/:movieId" element={<MovieInfo />} />

      </Routes>

      {/* movie catalogue */}
      {/* this component is only visible on the home page */}
      
      {/* movie details component */}
    </div>
  );
}

export default App;
