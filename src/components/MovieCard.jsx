import React from "react";
import MovieControls from "./MovieControls";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const MovieCard = ({ movie}) => {
  return (
    <div className="movie-card"> 
     <Card key={movie.id}>
    <CardImg
      alt={movie.title}
      src={movie.thumbnail}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {movie.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       Opublikowano na YT : 
       {movie.published}
      </CardSubtitle>
      <CardText>
        {movie.description}
      </CardText>
      <p><span>
        {`${movie.likes} polubień`} </span> <span>{`${movie.views} odtworzeń `}</span>
      </p>
        <p>Dodano {movie.addedToLib}</p>
      <MovieControls movie={movie} />
    </CardBody>
  </Card>
    </div>
  );
};

export default MovieCard
