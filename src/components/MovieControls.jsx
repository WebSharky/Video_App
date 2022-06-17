import  { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button} from 'reactstrap';


const MovieControls = ({movie}) => {
 
   const {removeMovie, addToFavourites, removeFromFavourites, type, setModal, toggleIsModal} = useContext(GlobalContext);


  const handleWatch = () => {
        setModal({id: movie.id, title: movie.title})
        toggleIsModal()
  }

  return (
   
      <div>
    {type==='favourites' && (
      <div>
    <div>
      <Button 
        color="primary"
        onClick={handleWatch}
       >
        Obejrzyj
      </Button>
      <Button 
            color="danger"
            onClick={() => {
                      removeMovie(movie.id);
                      removeFromFavourites(movie.id)
                    }}
      >
        Usuń
      </Button>
     </div>
      <Button 
            color="danger"
      onClick={() => removeFromFavourites(movie.id)}
      >
        Usuń z ulubionych
      </Button>
                  </div>
                  )}

{type ==='movies' && (
      <div>
    <div>
      <Button 
        color="primary"
        onClick={() => handleWatch()}>
        Obejrzyj
      </Button>
      <Button 
            color="danger"
            onClick={() => {
                      removeMovie(movie.id);
                      removeFromFavourites(movie.id)
                    }}
      >
        Usuń
      </Button>
     </div>
      <Button
      color="warning"
      block
      onClick={() => addToFavourites(movie)}>
        Dodaj do ulubionych
      </Button> 
                  </div>

                    
                  )}




    </div>
  );
};

export default MovieControls
