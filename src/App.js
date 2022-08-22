import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserPage from "./components/UserPage"
import { Route, Switch } from "react-router-dom";

const jeff = {
  username: "jeff"
}

function App() {
  const [activeUser, setActiveUser] = useState(null)

  return (
    <>
      <NavBar activeUser={activeUser} setActiveUser={setActiveUser}/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/:username">
          <UserPage user={activeUser} />
        </Route>
        <Route path="/">
          <Home setActiveUser={setActiveUser} />
        </Route>
      </Switch>
     
    </>
  );
}

export default App;
