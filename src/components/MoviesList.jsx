import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem} from 'reactstrap';
import MovieRaw from "./MovieRaw";

const MoviesList = () => {

     const {
        movies,
        favourites,
        type
  } = useContext(GlobalContext);

  return (

      <div className="container">
       
        {type==='movies' && (
              movies.length > 0 ? (
            <ListGroup>
                <ListGroupItem>
                {movies.map((movie) => (
                    <MovieRaw movie={movie} key={movie.id} type={type}/>
                ))}
                </ListGroupItem>
            </ListGroup> ) : (
          <h2 className="no-movies">Nie masz jeszcze zapisanych filmów. Dodaj nowy lub skorzystaj z opcji kontentu demo.</h2>
        )
        )}

        {type==='favourites' && (
              favourites.length > 0 ? (
                <ListGroup>
                <ListGroupItem>
                {favourites.map((movie) => (
                    <MovieRaw movie={movie} key={movie.id} type={type}/>
                ))}
                </ListGroupItem>
            </ListGroup> ) : 
            (
          <h2 className="no-movies">Nie masz jeszcze ulubionych filmów. Dodaj nowy.</h2>
        )
        )}
       
      </div>
  );
};

export default MoviesList