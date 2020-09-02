import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink exact to="/" activeClassName="is-active">
                Home
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/features" activeClassName="is-active">
                Features
              </NavLink>
            </Tab>
          </div>

          <div className="viewport">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/features">
                <Features />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
