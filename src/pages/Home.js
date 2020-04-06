import React, {useState} from "react";
import {Redirect, Link} from "react-router-dom"
import "../css/Home.css";


function Home(){
	const [userN, setuserN]= useState('');

	const handleSubmit =(e)=>{
		e.preventDefault();
		
		
	}
    

	return (
				<form className="styleForm">
					<label> User: </label>
					<input type="text" id="userName" name="userName" onChange={(e) =>setuserN(e.target.value)}/>
					<br></br>
			
					<br></br>
					<Link to ={"/list/"+userN}><button>Log In</button></Link>
					<br></br>
					<Link to ={"/signup"}>New User</Link>
				</form>
			
	  
	);
}

export default Home;