import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";
import Users from "./components/Users/Users";


function App() {
  const hStyle = {
    textAlign: "center", 
    border: "1px solid orange", 
    padding: "10px", 
    width: "150px", 
    margin: "5px auto", 
    backgroundColor: "lightgray"}

    return (
    <div>
      <h2 style={hStyle}>Social Buddy</h2>
      <Router>
      <div>
        <nav style={{textAlign: "center", borderBottom: "2px solid gray"}}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
