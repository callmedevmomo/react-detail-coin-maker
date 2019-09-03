import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Details from "../Screens/Details";
import Markets from "../Screens/Markets";
import CoinExchanges from "../Screens/CoinExchanges";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
      <Route path="/coins/:id" component={Details} />
      <Route path="/coins/:id/markets" exact component={Markets} />
      <Route path="/coins/:id/exchanges" exact component={CoinExchanges} />
    </Router>
  );
};
