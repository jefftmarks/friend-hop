import React from "react";


function About() {
	return(
	
	<div>

		<div style={{ 
				backgroundImage: 'url("https://i.postimg.cc/rFR6c0by/f69cdf7c0d048ed61f050d15cedb6035.jpg")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				height: "100vh"}}>

		<div className="columns">
		
		<div className="column">
			
				<div className="box" style={{ width: 400, margin: "30px 30px"}}>
					<h1 className="is-centered" style={{ fontSize:"38px"}}>
					What is friend hop?
					</h1></div>
					<div className="column is-centered" style={{margin: "-30px 20px"}}>
					<div className="box is-centered" style={{ width: "40%", margin: "0px", marginBottom: "60px"}}>
					<h1  className="is-centered" style={{fontFamily: "", fontSize:"20px"}}>
					We are a social media emulator, bringing back the nostalgia of 2009 animation classics, while supporting a place to save and share your favorite songs of the week. 
					Friend hop also supports custom moods for your avatar and uploads of embedded music links. 
					</h1>
					</div>
					</div>
					
					
					
					<div className="column">
					<div className="box" style={{ width: 450, margin: "20px" }}>
					<h1 className="is-centered" style={{ fontSize:"38px"}}>
					Embedded music links?
					</h1>
					</div>
					</div>
					<div className="column" style={{margin: "-30px 20px"}}>
					<div className="box " style={{ width: "40%", margin: "0px" }}>
					<h1 className="is-centered" style={{fontFamily: "", fontSize:"20px"}}>
					While we cater to our audience of those who prefer SoundCloud, Youtube implementations are next on our to-do list!
					</h1>
					</div>
					</div>
				
				</div>
				</div>	
		</div>
	</div> 

	)			
}
	

export default About;