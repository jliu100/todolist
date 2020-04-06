import React , {useState,useEffect} from "react";
import { useParams} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";

function AddItem(){
    const {name,token} =useParams();
    const [addNew, setAddNew]=useState('');

    const NewI=()=>{
	     
		    if(addNew===''){
		    }
		    else{
		    	
			      axios.post('/api/todo-item', {}, {
			            data:{
			            content:addNew
			          },
			          headers: { 'Authorization': token }
			        }).then(function(response) {
			        	console.log(addNew);
			         
			      }).catch((error) => {
			           console.log(error);
			           
			      });
			  
		    }
		
  
    }
	return (

		<form >
         <input type="text" name="newItem" onChange={(e) =>setAddNew(e.target.value)}/>
         <Link to ={"/list/"+name}> <button onClick={NewI}>Add</button> </Link>
      	</form>
		
	);
}

export default AddItem;