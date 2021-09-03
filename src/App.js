import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import GetBooks from "./components/GetBooks";
import CommunityReading from "./components/CommunityReading";
import Home from "./components/home";
import "./App.css";
// AIzaSyCDy3IAjGQcPaK1kVuQI08AXo_kBcg-Z1M
const BookCollection = () => {
  return <div>Book Collection</div>;
};

const Conversations = () => {
  return <div>Conversations</div>;
};

const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active mx-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/bookcollection">Book Collection</NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/communityreading">Community Reading</NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/conversations">Conversations</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Link component={BookCollection} path="/bookcollection" />
        <Link component={CommunityReading} path="/communityreading" />
        <Link component={Conversations} path="/conversations" />
        <Link component={Home} path="/" />
      </Switch>
    </>
  );
};

export default App;
