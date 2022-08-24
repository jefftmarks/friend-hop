import React, { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserPage from "./components/UserPage"
import SearchResults from "./components/SearchResults";
import { Route, Switch } from "react-router-dom";


function App() {
  // Tracks active username after log in
  const [activeUsername, setActiveUsername] = useState(null);
  // Tracks search bar input. Both Searchbar and SearchResults component need access
  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("user")) setActiveUsername(localStorage.getItem("user"))
  },[])


  return (
    <>
      <NavBar
        activeUsername={activeUsername}
        onClickLogout={setActiveUsername} 
        onChangeSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/:username">
          <UserPage activeUsername={activeUsername} />
        </Route>
        <Route path="/search/:query">
          <SearchResults setActiveUsername={setActiveUsername} handleOnCardClick={setSearchInput} />
        </Route>
        <Route exact path="/">
          <Home activeUsername={activeUsername} setActiveUsername={setActiveUsername} />
        </Route>
      </Switch>
     
    </>
  );
}

export default App;
