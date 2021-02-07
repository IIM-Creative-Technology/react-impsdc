import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "../views/index";
import quizz from "../views/Quizz";
import login from "../views/Login";

const Routeur = () => (
  <Router>
    <Switch>
      <Route  exact path='/' component={index} />
      <Route  exact path='/login' component={login} />
    </Switch>
  </Router>
)

export default Routeur