import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Commands from "./pages/Commands";
import About from "./pages/About";

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <div>
      <Navigation/>
    	<Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/commands" component={Commands}/>
        <Route path="/features" component={Features}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  </HashRouter>,
app);