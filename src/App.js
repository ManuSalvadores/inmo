import React from "react";
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Property from './pages/property/property';
import { StateProvider } from './state';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <StateProvider>
      <Router>
        <div>
          <Navbar />
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/property/:id">
                <Property />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}
