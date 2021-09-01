const ethRateReducer = (state = "", action) => {
  switch (action.type) {
    case "ETH":
      return (state = action.payload);
    default:
      return state;
  }
};
export default ethRateReducer;
