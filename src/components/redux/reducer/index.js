import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged_Reducer";
import btcRateReducer from "./btcRateReducer";
import ethRateReducer from "./ethReducer";
import allCoinReducer from "./allcoinReducer";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  btc: btcRateReducer,
  eth: ethRateReducer,
  allCoin: allCoinReducer,
});

export default allReducers;
