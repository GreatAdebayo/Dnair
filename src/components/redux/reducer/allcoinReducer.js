const allCoinReducer = (state = "", action) => {
  switch (action.type) {
    case "ALL":
      return (state = action.payload);
    default:
      return state;
  }
};
export default allCoinReducer;
