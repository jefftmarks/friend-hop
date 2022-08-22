import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
