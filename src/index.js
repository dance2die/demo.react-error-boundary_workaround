import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import Wizard from "./components/Wizard";
import Workaround from "./components/Workaround";

import "antd/dist/antd.css";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>react-error-boundary Workaround Demo</h1>

        <Router>
          <div>
            <ol>
              <li>
                <Link to="/">Failing Demo</Link>
              </li>
              <li>
                <Link to="/workaround">Workaround</Link>
              </li>
            </ol>
            <div
              style={{
                border: "1px dashed black",
                padding: "2em",
                margin: "2em"
              }}
            >
              <Switch>
                <Route exact path="/" component={Wizard} />
                <Route path="/workaround" component={Workaround} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
