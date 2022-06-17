import {useEffect} from 'react'
import { youtubeParser } from '../utils'
import { manageResponse } from '../utils'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Movies () {

    const {
      setFavourites,
      setMovies, 
    } = useContext(GlobalContext);
    
    useEffect(() => {
        console.log('to z effect')
          if (localStorage.getItem('moviesIDs')) {
            loadMovies()
          }
          if (localStorage.getItem('favouritesIDs'))
          loadFavourites()
    }, [])

    const key = process.env.REACT_APP_YOUTUBE_API_KEY

    const moviesIDs = localStorage.getItem('moviesIDs')? JSON.parse(localStorage.getItem('moviesIDs')) : []
    let moviesToFetch = moviesIDs.map((ID) => `id=${youtubeParser(ID)}&`).join('')
    const moviesURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&${moviesToFetch}key=${key}` 
    
    const favouritesIDs = localStorage.getItem('favouritesIDs')? JSON.parse(localStorage.getItem('favouritesIDs')) : []
    let favouritesToFetch = favouritesIDs.map((ID) => `id=${youtubeParser(ID)}&`).join('')
    const favouritesURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&${favouritesToFetch}key=${key}` 

    function loadMovies() {
      console.log(moviesToFetch)
        if(moviesToFetch!==`id=&`) {
          fetch(moviesURL)
              .then( (response) => response.json())
              .then((data) => {
              const movies = data.items.map((movie) => manageResponse(movie)) 
              setMovies(movies)
            })
        }
        }

    function loadFavourites() {
      console.log(favouritesToFetch)
      if(favouritesToFetch!==`id=&`){
        fetch(favouritesURL)
          .then( (response) => response.json())
          .then((data) => {
          const movies = data.items.map((movie) => manageResponse(movie)) 
          setFavourites(movies)
        })
      }
    }
    

    return <h2>Witaj na Video-App. by WebSharky (takiej playliście youtube, tylko gorszej:)</h2>
  }
  export default Movies