import React, { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Inbox from "./components/Inbox";
import UserPage from "./components/UserPage"
import SearchResults from "./components/SearchResults";
import { Route, Switch } from "react-router-dom";


function App() {
  // Tracks activeUser after log in
  const [activeUser, setActiveUser] = useState(null);
  // Tracks search bar input. Both Searchbar and SearchResults component need access
  const [searchInput, setSearchInput] = useState("");

  // Stores activeUser's username locally so we can persist activeUser between page reloads
  useEffect(()=>{
    const prevUsername = localStorage.getItem("user")

    if(prevUsername) {
      fetch(`http://localhost:4000/users?username=${prevUsername}`)
			.then(res => res.json())
			.then(data => setActiveUser(data[0]))
    }
  },[])


  return (
    <>
      <NavBar
        activeUser={activeUser}
        onClickLogout={setActiveUser} 
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/inbox">
          <Inbox activeUser={activeUser} setActiveUser={setActiveUser} />
        </Route>
        <Route path="/user/:username">
          <UserPage activeUser={activeUser} setActiveUser={setActiveUser} />
        </Route>
        <Route path="/search/:query">
          <SearchResults setActiveUser={setActiveUser} handleOnCardClick={setSearchInput} />
        </Route>
        <Route exact path="/">
          <Home activeUser={activeUser} setActiveUser={setActiveUser} />
        </Route>
      </Switch>
     
    </>
  );
}

export default App;
