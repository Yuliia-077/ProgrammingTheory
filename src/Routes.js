import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NewsContainer from './components/NewsContainer';
import Login from './components/Login';
import Profile from './components/Profile';
import Exit from './components/Exit'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/news">
          <NewsContainer />
      </Route>
      <Route path="/profile">
          <Profile />
      </Route>
      <Route path="/login">
          <Login />
      </Route>
      <Route path="/exit">
          <Exit />
      </Route>
    </Switch>
  );
}