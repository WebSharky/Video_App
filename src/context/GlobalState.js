import React, { createContext, useReducer } from "react";
import VideoAppReducer from "./VideoAppReducer";
import { useEffect } from "react";

// initial state
const initialState = {
    movies: [],
    favourites: [],
    type: 'movies',
    layout: 'tiles',
    isModal: false,
    modal: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(VideoAppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("moviesIDs", JSON.stringify(state.movies.map( (movie) => movie.id)))
    localStorage.setItem("favouritesIDs", JSON.stringify(state.favourites.map((movie) => movie.id)))
  }, [state.movies, state.favourites]);

  // actions
  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };
  const setMovies = (movies) => {
    dispatch({ type: "SET_MOVIES", payload: movies });
  }
  const setFavourites = (movies) => {
    dispatch({ type: "SET_FAVOURITES", payload: movies });
  }
  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };
  const addToFavourites = (movie) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: movie });
  };
  const removeFromFavourites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id });
    
  };
  const demoContent = (movie) => {
    dispatch({ type: "DEMO_CONTENT", payload: movie });
  };
  const clearContent = () => {
    dispatch({ type: "CLEAR_CONTENT", payload: [] });
  }
  const moviesByViews = () => {
    dispatch({ type: "MOVIES_BY_VIEWS"});
  }
  const moviesByLikes = () => {
    dispatch({ type: "MOVIES_BY_LIKES"});
  }
  const moviesOldest = () => {
    dispatch({ type: "MOVIES_OLDEST"});
  }
  const moviesMostRecent = () => {
    dispatch({ type: "MOVIES_MOST_RECENT"});
  }
  const setType = (type) => {
    dispatch({ type: "SET_TYPE", payload: type});
  }
  const setLayout = (type) => {
    dispatch({ type: "SET_LAYOUT", payload: type});
  }
  const toggleIsModal = () => {
    dispatch({ type: "TOGGLE_IS_MODAL", payload: !state.isModal});
  }
  const setModal = (modal) => {
    dispatch({ type: "SET_MODAL", payload: modal});
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        favourites: state.favourites,
        type: state.type,
        isModal: state.isModal,
        modal: state.modal,
        layout: state.layout,
        addMovie,
        setMovies,
        setFavourites,
        removeMovie,
        addToFavourites,
        removeFromFavourites,
        demoContent,
        clearContent,
        moviesByViews,
        moviesByLikes,
        moviesOldest,
        moviesMostRecent,
        setType,
        setLayout,
        toggleIsModal,
        setModal
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
