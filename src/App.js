import React, { Component } from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import notfound from "./components/notfound";
import About from "./components/about";
import photography from "./components/photography";
import gallery from "./components/gallery";
import contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photography" component={photography} />
            <Route exact path="/About" component={About} />
            <Route exact path="/gallery" component={gallery} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="*" component={notfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
