import { MoviesTiles, MoviesList } from "../components";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useState, useRef} from "react";
import { youtubeParser, manageResponse } from "../utils";
import { InputGroup, Button, Input } from 'reactstrap';
import { Movies, VideoModal } from "../components";


export const MainPage = () => {

    const {
        movies,
        layout,
        addMovie        
  } = useContext(GlobalContext);

  const [input, setInput] = useState("");
  const movieIDRef = useRef(null);

  function handleClick () {
      movieCall.then((res) => {   
        addMovie(res)
      });
  }

      let IDToFetch = `id=${youtubeParser(input)}&`
      const key = process.env.REACT_APP_YOUTUBE_API_KEY

    const fetchYT = (ID) => {
        const baseURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&${ID}key=${key}` 
        return fetch(baseURL)
    }
    
    const movieCall = IDToFetch !== `id=&`? fetchYT(IDToFetch)
    .then((response) => response? response.json() : null)
    .then((movie) => {
      movie = movie.items[0]
      let formattedResponse = manageResponse(movie)  
      formattedResponse = formattedResponse.length === 1? formattedResponse[0] : formattedResponse 
      return formattedResponse
      
    }) : null;

      return (
        
        <div className="section__margin">
          <Movies />

           <div className="section__padding" >
    <InputGroup>
    <Button 
     color="primary" 
     onClick={handleClick}
    >
     Dodaj film
    </Button>
    <Input value={input} onChange={e => setInput((e.target.value))} ref={movieIDRef} placeholder="Wklej link do filmiku YT lub tylko jego ID" />
  </InputGroup>
    </div>

            { layout==='tiles' && (
              <MoviesTiles movies={movies}/>
            )}
            { layout==='list' && (
              <MoviesList movies={movies}/>
            )}

            <VideoModal />
        
        </div> 
    )}
  
    export default MainPage