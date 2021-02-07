import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "../views/index";
import login from "../views/Login";
import QuizzList from "../views/QuizzPlayer/QuizzList.js";
import QuizzDetails from "../views/QuizzPlayer/QuizzDetails.js";
import QuizzPlayer from "../views/QuizzPlayer/QuizzPlayer.js";
import QuizzResults from "../views/QuizzPlayer/QuizzResults.js";

const Routeur = () => (
  <Router>
    <Switch>
      <Route  exact path='/' component={index} />
      <Route  exact path='/login' component={login} />
      <Route  exact path='/quizz/list' component={QuizzList} />
      <Route  exact path='/quizz/details/:quizzId' component={QuizzDetails} />
      <Route  exact path='/quizz/player/:quizzId' component={QuizzPlayer} />
      <Route  exact path='/quizz/results/:playerScoreId' component={QuizzResults} />
    </Switch>
  </Router>
)

export default Routeur