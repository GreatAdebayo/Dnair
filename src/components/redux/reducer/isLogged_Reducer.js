const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return (state = action.payload);
    default:
      return true;
  }
};
export default isLoggedReducer;
