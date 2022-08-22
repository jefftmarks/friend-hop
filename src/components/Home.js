import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Home() {
	const [hasAccount, setHasAccount] = useState(true);


	return (
		<div style={{ 
      backgroundImage: 'url("https://www.linkpicture.com/q/home_4.jpg")',
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
						{hasAccount ? <Login setHasAccount={() => setHasAccount(false)}/> : <Signup setHasAccount={() => setHasAccount(true)} />}
      			</div>
    			</div>
  			</div>
			</div>	
    </div>
  );
}

export default Home;