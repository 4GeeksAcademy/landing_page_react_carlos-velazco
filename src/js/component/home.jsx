import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import JumpBotron from "./JumpBotron";
import Footer from "./Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return(
		<div>
		<Navbar/>
		<div className="container">
		<JumpBotron/>
		<div className="d-flex row mx-auto mt-4   gap-5">
		<Card />
		<Card />
		<Card />
		<Card />
		</div>
		</div>
		<Footer/>
		</div>
	)
};

export default Home;
