import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserPage from "./components/UserPage"
import SearchResults from "./components/SearchResults";
import { Route, Switch } from "react-router-dom";

function App() {
  const [activeUser, setActiveUser] = useState(null)

  return (
    <>
      <NavBar activeUser={activeUser} setActiveUser={setActiveUser} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/:username">
          <UserPage user={activeUser} />
        </Route>
        <Route path="/search/:query">
          <SearchResults setActiveUser={setActiveUser} />
        </Route>
        <Route path="/">
          <Home setActiveUser={setActiveUser} />
        </Route>
      </Switch>
     
    </>
  );
}

export default App;
