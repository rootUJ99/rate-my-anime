export const initialState = { selectedAnime: {
  newAnime: true
} };
export const reducer = (state, action) => {
  switch (action.type) {
    case "select_anime":
      return {
        ...state,
        selectedAnime: action.data
      };
    default:
      return new Error();
  }
};