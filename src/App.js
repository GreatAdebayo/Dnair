import React from "react";
import "./App.css";
import Login from "./components/landing_page/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Graph from "./components/landing_page/graph";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import PricesGuard from "./components/Guard/pricesGuard";
import Prices from "./components/landing_page/home";
import GraphGuard from "./components/Guard/graphGuard";
import ErrorPage from "./components/errorPage";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <PricesGuard
            exact
            path="/price"
            component={Prices}
            isLogged={isLogged}
          />

          <GraphGuard
            exact
            path="/graph"
            component={Graph}
            isLogged={isLogged}
          />

          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
