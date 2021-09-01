export const isLogged = (condition) => {
  return {
    type: "LOGGED_IN",
    payload: condition,
  };
};

export const btc = (response) => {
  return {
    type: "BTC",
    payload: response,
  };
};

export const eth = (response) => {
  return {
    type: "ETH",
    payload: response,
  };
};

export const allCoin = (response) => {
  return {
    type: "ALL",
    payload: response,
  };
};
