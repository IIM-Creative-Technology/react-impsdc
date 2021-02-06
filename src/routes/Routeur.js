import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "../views/index";
import quizz from "../views/Quizz";

const Routeur = () => (
  <Router>
    <Switch>
      <Route  exact path='/' component={index} />
      <Route  exact path='/quizz' component={quizz} />
    </Switch>
  </Router>
)

export default Routeur