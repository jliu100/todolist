import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Redirect, Link} from "react-router-dom";

function Element(){
	const {token,elementId,name} =useParams();
	const [dataA, setDataA ] =useState([]);


	useEffect(() => {
		var url='/api/todo-item/'+elementId;
	    axios.get(url, { headers: { 'Authorization': token }}).then(response => {
		    setDataA(response.data);
			
		    }).catch((error) => {
		        console.log('error on Edit');
		});

    },[]);
	
	function completed(){
		
		if(dataA.completed===true){
			return "Task completed";
		}
		return "Task not completed";
	}
	const deleted =() =>{
		if(dataA.deleted===false){
			return "Task not deleted";
		}
	}

	const Taskdelete =()=>{
		var url='/api/todo-item/'+elementId;

		    axios.delete(url,{
			 	headers: {'Authorization': token }
			 }).then(response => {
			    console.log("delete");
			    
			    
			}).catch((error) => {
			        console.log(error);
			});

   		
	
	}
	const TaskCompleted =()=>{
		var url='/api/todo-item/'+elementId;

		axios.put(url, {},{ 
		data:{
				completed:true
			},
			headers: { 'Authorization': token }
		}).then(function(response) {
		
		}).catch((error) => {
		       console.log(error);

		});
	   		
	}
	

	return (
		<div>User: {token} {elementId} {name}

			<h3>id: {dataA.id}</h3>
			<h3>content: {dataA.content}</h3>
			<h3>{completed()}</h3>
			<h3>{deleted()}</h3>
		

			<form>
				<Link to ={"/list/"+name} ><button onClick={Taskdelete}>Delete</button></Link>
				<Link to ={"/list/"+name} ><button onClick={TaskCompleted}>Completed</button></Link>
			</form>

		</div>

		
	);
	
};

export default Element;