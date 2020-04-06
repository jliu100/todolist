import React from "react";
import { useParams } from "react-router";

function User(){
	// const {firstname,lastname} = useParams();   // can get data from the route link : ex : /user/john/johnson   we will get john
	// return (<div>User {firstname} {lastname}</div>)
	return <div> Welcome User</div>
}

export default User;