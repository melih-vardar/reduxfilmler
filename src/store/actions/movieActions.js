export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "Film Ekler";

export const deleteMovie = (id) => {
  // console.log("actionCreator Delete", id, typeof id);
  return { type: DELETE_MOVIE, payload: Number(id) };
};

export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};
