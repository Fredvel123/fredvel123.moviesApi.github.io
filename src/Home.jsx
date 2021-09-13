import React, { Fragment } from 'react';
import './home.css';
// component imports
import MoviesApiInfo from './components/ApiMovies';


function Home() {
  return(
    <Fragment>

      <MoviesApiInfo /> 
    </Fragment>
  )
}
export default Home; 