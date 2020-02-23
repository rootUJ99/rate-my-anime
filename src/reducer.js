import {convertToken} from './utils';
export const initialState = { 
  userInfo: convertToken(localStorage.getItem('token')) || null,
  selectedAnime: {
  newAnime: true
  },
};
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