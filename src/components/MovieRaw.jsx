import { ListGroup, ListGroupItem } from "reactstrap"
import MovieControls from "./MovieControls"


const MovieRaw = ({movie}) => {
    return (
<ListGroup horizontal key={movie.id}>
<ListGroupItem>
  <img src={movie.thumbnail} alt={movie.title}></img>
</ListGroupItem>
<ListGroupItem>
  {movie.title}
</ListGroupItem>
<ListGroupItem>
  {movie.likes}
</ListGroupItem>
<ListGroupItem>
{movie.views}
</ListGroupItem>
<ListGroupItem>
{movie.description}
</ListGroupItem>
<ListGroupItem>
<MovieControls movie={movie} />
</ListGroupItem>
</ListGroup>
    )
}
export default MovieRaw
