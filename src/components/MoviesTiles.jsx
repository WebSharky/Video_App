import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import './moviesTiles.css';
import { CardGroup} from 'reactstrap';

const MoviesTiles = () => {

     const {
        movies,
        favourites,
        type
  } = useContext(GlobalContext);

  return (

    <div className="movie-page">
      <div className="container">
        <div className="header">
          {type==='movies' && (

          <h2 className="heading"> {movies.length === 1 ? "Twój film" : "Twoje filmy"}</h2>
          )}
          {type==='favourites' && (
            <h2 className="heading"> {movies.length === 1 ? "Twój ulubiony film" : "Twoje ulubione filmy"}</h2>
          )}
        </div>

        
       

        {type==='movies' && (
              movies.length > 0 ? (
          <div className="movie-grid">
              <CardGroup>

            {movies.map((movie) => (
               
              <MovieCard movie={movie} key={movie.id} type={type}/>
            ))}
              </CardGroup>
          </div>
        ) : (
          <h2 className="no-movies">Nie masz jeszcze zapisanych filmów. Dodaj nowy lub skorzystaj z opcji kontentu demo.</h2>
        )
        )}

{type==='favourites' && (
              favourites.length > 0 ? (
          <div className="movie-grid">
              <CardGroup>

            {favourites.map((movie) => (
               
              <MovieCard movie={movie} key={movie.id}/>
            ))}
              </CardGroup>
          </div>
        ) : (
          <h2 className="no-movies">Nie masz jeszcze ulubionych filmów. Dodaj nowy.</h2>
        )
        )}






      </div>
    </div>
  



  );
};

export default MoviesTiles