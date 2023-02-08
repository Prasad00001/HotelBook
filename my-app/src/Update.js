import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import './App.css'
export function UpdateDays() {
    let {_id}=useParams()
  const [form , setForm]= useState({
  }); 
 
    const handleForm=(e)=>{
        //console.log(e.target.value)
        
       
        setForm({
            ...form,
          
           [e.target.name] :e.target.value
        })
       
    }
   
  
    const handleSubmit= async (e)=>{
       // e.preventDefault();
        // console.log(_id)
        console.log(form)
        Object.assign(form, {_id: _id});

        const response = fetch('http://localhost:9090/demo/update/',
        {
            method:'PUT',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
   alert("Update Successfully")
       
      }
  return (
    <div >
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" className="btn btn-success"><Link to={'/'}><i className="bi bi-house-fill">Home</i></Link></button>
<button type="button" className="btn btn-danger"><Link to={'/data'}>DETAILS</Link></button>
<button type="button" className="btn btn-warning"><Link to={'/update'}>UPDATE</Link></button>

</div>



<div className='App'>
<form onSubmit={handleSubmit}>
<div className="App2" hidden>
<label>User id:-</label>
<input type="text" name='_id' value={_id}  onClick={handleForm}/>
</div>
<div className="App2">
<label>User Name:-</label>
<input type="text" name='userName' onChange={handleForm}/>
</div>
<div className="App2">
<label>Address :- -</label>
<input type="text" name='address' rows="4" cols="50" onChange={handleForm}/>
</div>
<div className="App2">
<label>Mobile Number :- -</label>
<input type="phone" name='mobileNumber' onChange={handleForm}/>
</div>
<div className="App2">
<label>Email :- </label>
<input type='email' name='email' onChange={handleForm}/>
</div>
<input type='submit'/>


</form>
</div> 
      
    </div>
  )
}
