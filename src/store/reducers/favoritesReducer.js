import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case REMOVE_FAVORITE:
      console.log("reducer Delete", action.payload, typeof action.payload);
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    case ADD_FAVORITE:
      if (state.favorites.find((item) => item.id === action.payload.id)) {
        newState = { ...state };
      } else {
        newState = {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return newState;
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
