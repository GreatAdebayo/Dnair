const btcRateReducer = (state = "", action) => {
  switch (action.type) {
    case "BTC":
      return (state = action.payload);
    default:
      return state;
  }
};
export default btcRateReducer;
