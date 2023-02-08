import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

export function New() {
    const [user , setUser]= useState([]); 
    let {rName}=useParams()
   const getData= async ()=>{
     fetch(`http://localhost:8080/demo/${rName}`,
      {
        method:'GET'
    }).then(response => response.json())
    .then(data => setUser(data.data))
    console.log("User",user)
   }
  
    useEffect(()=>{
      getData();
  },[])
  
  return (
    <div>
      <h2>New</h2>
      {user.map((item, _id)=><ul key={user._id}><li>{user.userName}</li></ul>)}
    </div>
  )
}
