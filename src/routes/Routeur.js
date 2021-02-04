import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import index from "../pages/index"
import quizz from "../pages/Quizz"

const Routeur = () => (
  <Router>
    <Switch>
      <Route  exact path='/' component={index} />
      <Route  exact path='/quizz' component={quizz} />
    </Switch>
  </Router>
)

export default Routeur