import React from "react";
import Navbar from './components/navbar/navbar';
import Grid from './components/grid/grid';

import {
  BrowserRouter as Router,
  Switch,
  useParams,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/view/:id">
            <View />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Grid />
    </>
  )
}

function About() {
  return <h2>About</h2>;
}

function View() {
  const { id } = useParams();
  return (
    <>
    <h2>{id}</h2>
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}