import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserPage from "./components/UserPage"
import SearchResults from "./components/SearchResults";
import { Route, Switch } from "react-router-dom";


function App() {
  // Tracks active user after log in
  const [activeUser, setActiveUser] = useState(null);
  // Tracks search bar input. Both Searchbar and SearchResults component need access
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <NavBar
        activeUser={activeUser}
        onClickLogout={setActiveUser} 
        onChangeSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/:username">
          <UserPage activeUser={activeUser} />
        </Route>
        <Route path="/search/:query">
          <SearchResults setActiveUser={setActiveUser} handleOnCardClick={setSearchInput} />
        </Route>
        <Route path="/">
          <Home setActiveUser={setActiveUser} />
        </Route>
      </Switch>
     
    </>
  );
}

export default App;
