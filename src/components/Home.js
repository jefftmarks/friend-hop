import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";


function Home({ activeUser, setActiveUser }) {
	const [hasAccount, setHasAccount] = useState(true);

	const history = useHistory();

	if (activeUser) {
		history.push(`/user/${activeUser.username}`);
	}

	return (
		<div style={{ 
      backgroundImage: 'url("https://www.linkpicture.com/q/home1.jpg")',
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "center",
			width: "100%",
			height: "100vh"
    }}>
			<div className="columns">
			
  			<div className="column">
    			<div className="columns is-mobile">
      			<div className="column is-half">
				  <div className="column"></div>
				  <div className="box has-text-centered" style={{ width: 400, margin: "20px" }}><h1 className="is-centered" style={{fontFamily: "M PLUS Rounded c", fontWeight:"bold", fontSize:"25px"}}>Welcome back!</h1></div>

						{hasAccount ? (
							<Login setActiveUser={setActiveUser} setHasAccount={() => setHasAccount(false)}/>
						) : (
							<Signup setHasAccount={() => setHasAccount(true)} setActiveUser={setActiveUser} />
						)}
      			</div>
    			</div>
  			</div>
			</div>	
    </div>
  );
}

export default Home;