import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Prices from "../Screens/Prices";
import Exchanges from "../Screens/Exchanges";
import Coins from "../Screens/Coins";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/prices" component={Prices} exact />
        <Route path="/exchanges" component={Exchanges} exact />
        <Route path="/coins" component={Coins} exact />
      </Switch>
    </Router>
  );
};
