import React from "react";


function About() {
	return(
	
	<div>

		<div style={{ 
				backgroundImage: 'url("https://www.linkpicture.com/q/about_5.png")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				height: "100vh"}}>

		<div className="columns">
		
		<div className="column">
			<div className="column"></div>
				<div className="box has-text-centered" style={{ width: 400, margin: "30px 30px"}}>
					<h1 className="is-centered" style={{fontFamily: "", fontWeight:"bold", fontSize:"25px"}}>
					What is friend hop?
					</h1></div>
					<div className="column" style={{margin: "-30px 20px"}}>
					<div className="box has-text-centered" style={{ width: "80%", margin: "0px", marginBottom: "60px"}}>
					<h1 className="is-centered" style={{fontFamily: "", fontWeight:"bold", fontSize:"25px"}}>
					We are a social media emulator, bringing back the nostalgia of 2009 animation classics, while supporting a place to save and share your favorite songs of the week. 
					Friend hop also supports custom moods for your avatar and uploads of embedded music links. 
					</h1>
					</div>
					</div>
					<div className="column">
					<div className="box has-text-centered" style={{ width: 400, margin: "20px" }}>
					<h1 className="is-centered" style={{fontFamily: "", fontWeight:"bold", fontSize:"25px"}}>
					Embedded music links?
					</h1>
					</div>
					</div>
					<div className="column" style={{margin: "-30px 20px"}}>
					<div className="box has-text-centered" style={{ width: "50%", margin: "0px" }}>
					<h1 className="is-centered" style={{fontFamily: "", fontWeight:"bold", fontSize:"25px"}}>
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