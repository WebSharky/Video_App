const VideoAppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE":
        return {
          ...state,
          movies: [action.payload, ...state.movies],
        };
        case "REMOVE_MOVIE":
          return {
            ...state,
            movies: state.movies.filter(
              (movie) => movie.id !== action.payload
            ),
          };
      case "DEMO_CONTENT":
          return {
            ...state,
            movies: action.payload,
          };
      case "CLEAR_CONTENT":
          return {
              ...state,
              movies: action.payload,
              favourites: action.payload
            };
      case 'MOVIES_BY_VIEWS':
            return {
                  ...state,
                  movies: state.movies.sort((a,b) => {
                    return (b.views - a.views)
                  })
                };
      case 'MOVIES_BY_LIKES':
            return {
          ...state,
          movies: state.movies.sort((a,b) => {
            return (b.likes - a.likes)
          })
        };
      case 'MOVIES_OLDEST':
        return {
          ...state,
          movies: state.movies.sort((a,b) => {
            if (a.addedToLib < b.addedToLib)
              return -1
            if (a.addedToLib > b.addedToLib)
              return 1
            if (a.addedToLib === b.addedToLib)
              return 0
          })
        };
      case 'MOVIES_MOST_RECENT':
        return {
          ...state,
          movies: state.movies.sort((a,b) => {
            if (a.addedToLib > b.addedToLib)
              return -1
            if (a.addedToLib < b.addedToLib)
              return 1
            if (a.addedToLib === b.addedToLib)
              return 0
          })
        };
      case "ADD_TO_FAVOURITES":
        return {
          ...state,
          favourites: [action.payload, ...state.favourites]
        };
        case "REMOVE_FROM_FAVOURITES":
          return {
            ...state,
            favourites: state.favourites.filter(
              (movie) => movie.id !== action.payload
            ),
          };
          case "SET_MOVIES":
            return {
              ...state,
              movies: action.payload
            };
            case "SET_FAVOURITES":
            return {
              ...state,
              favourites: action.payload
            };
            case "SET_TYPE":
              return {
                ...state,
                type: action.payload
              };
              case "SET_LAYOUT":
                return {
                  ...state,
                  layout: action.payload
                };
              case "TOGGLE_IS_MODAL":
              return {
                ...state,
                isModal: action.payload
              };
              case "SET_MODAL":
                return {
                  ...state,
                  modal: action.payload
                };
              default:
                return state;
            }
  }

  export default VideoAppReducer

  
 