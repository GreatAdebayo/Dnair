import React from "react";
import { Route, Redirect } from "react-router-dom";

const PricesGuard = ({
  component: Component,
  isLogged,
  ...theRemainingProps
}) => {
  return (
    <Route
      {...theRemainingProps}
      render={() => {
        return isLogged ? <Component /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PricesGuard;
