import React, { Fragment, useState, useEffect } from 'react';
import Cards from './Cards';

function MoviesApiInfo() {
  // funtion to get the value through the input.
  const [movieInput, setMovieInput] = useState({
    titleMovie: "",
  });
  const SearchMovie = (e) => {
    const { name, value } = e.target;
    setMovieInput((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    getNextApi();
  };
  // function to get the api from the apiUrl.
  const [movieData, setMovieData] = useState([]);
  const urlApiMain = `https://www.omdbapi.com/?i=tt3896198&apikey=87c0c98e&s=${movieInput.titleMovie}`;
  const getNextApi = async () => {
    const urlApi = await fetch(urlApiMain + `&page=${accountant}`);
    const dataRes = await urlApi.json();
    setMovieData(dataRes.Search);
  };

  useEffect(() => {
    getNextApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function to go the next page.
  const [accountant, setAccountant] = useState(1);
  const toNextPage = () => {
    setAccountant(accountant + 1);
  };

  const nextPage = () => {
    getNextApi();
    toNextPage();
  }; 
  
  return (
    <Fragment>
      <form onSubmit={submit}>
        <label htmlFor="">Search a movie</label>
        <input
          type="text"
          placeholder="type some movie here"
          name="titleMovie"
          onChange={SearchMovie}
          value={movieInput.titleMovie}
        />
        <button>Search</button>
      {!movieData ? <h3>Do you want to search a movie?</h3> : !movieData}
      </form>


      {movieData ? <button onClick={nextPage}>Next Pages</button> : movieData}

      <Cards 
       movie={movieData}/>
    </Fragment>
  );
}
export default MoviesApiInfo;