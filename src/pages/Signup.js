import React, {useState} from "react";
import {Redirect, Link} from "react-router-dom"

function Signup(){
	const [newUser, setNewUser]= useState('');
	
	return (
		<form className="styleForm">
					<label> New User Name: </label>
					<input type="text" id="new" name="new" onChange={(e) =>setNewUser(e.target.value)}/>
					<br></br>
			
					<br></br>
					<Link to ={"/newU/"+newUser}><button>Submit</button></Link>
					<br></br>
					<Link to ={"/"}>Go to LogIn Page</Link>
				</form>
		);

}

export default Signup;