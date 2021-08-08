export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  toggleTheme: JSON.parse(localStorage.getItem("theme")) || false,
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "DARK_THEME":
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    case "USER_DETAILS":
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
