import React, { Fragment, useState, useEffect } from 'react';

function Cards({ movie }) {
  const [onlyMovieInfo, setonlyMovieInfo] = useState([]);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    
  }, [])
  return (
    <Fragment>
      <div className="card-main">
        {movie
          ? movie.map((item, index) => (
              <div key={index}>
                <img src={item.Poster} alt={item.Title} />
                <h1>{item.Title}</h1>
                <h2>{item.Year}</h2>
                <h3>{item.Type}</h3>
                {!open ? (
                  <button
                    onClick={
                      movie
                        ? async () => {
                            const info = await fetch(
                              `https://www.omdbapi.com/?&apikey=87c0c98e&i=${item.imdbID}`
                            );
                            const data = await info.json();
                            setonlyMovieInfo(data);
                            setOpen(!open);
                          }
                        : movie
                    }
                  >
                    see more
                  </button>
                ) : (
                  ""
                )}
                {
                  <div>
                    {open && onlyMovieInfo.imdbID === item.imdbID ? 
                    <div>
                      <p>{onlyMovieInfo.Actors}</p> 
                      
                    </div>
                    : ""}
                  </div>
                }
                {open ? (
                  <button onClick={() => setOpen(!open)}>close</button>
                ) : (
                  ""
                )}
              </div>
            ))
          : movie}
      </div>
      <div>
      </div>
    </Fragment>
  );
};
export default Cards;