import React from 'react'
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './App.css';
Modal.setAppElement('#root');


const customStyles = {
    content: {
      top: '15%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export function Data() {
    const [user , setUser]= useState([]); 
    const [form, setForm]=useState([]);
    const [invoice, setInvoice]=useState();
    const[isLoginModalOpen,setIsLoginModalOpen]=useState(false)
    useEffect((e)=>{
      getData(e);
  },[])
    const getData= async (e)=>{
      //console.log(e.target.value)
       const response = await fetch('http://localhost:9090/demo',{method:'GET'})
       //console.log(response)
        .then(response=>response.json())
    .then(data=>setUser(data.data))
    console.log(user)
    }
    const uploadImage=async(e)=>{
      console.log(e.target.value)
      const file=e.target.files[0]
     const Base64=await convertBase64(file)
    
    };
    const convertBase64=(file)=>{
      return new Promise((resolve, reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
          resolve(fileReader.result);
        };
        fileReader.onerror=(error)=>{
          reject(fileReader.result);
        };
      });
  
    };
   const handleForm=async(e)=>{
    console.log(e.target.value, e.target.name)
    setForm({
      ...form,
     [e.target.name] :e.target.value
  })
  handleSubmit(form);
  }
  const handleInvoice=async(e)=>{
    console.log("value",e.target.value)
    console.log(e.target.value, e.target.name)
    setInvoice({
      ...invoice,
     [e.target.name] :e.target.value
  })
  handleSubmit2(invoice);
  }
  const handleSubmit2= async (invoice)=>{
    invoice.preventDefault();
    alert("Data Successfully Submit")
    Object.assign(form, {invoiceimg: Base64});
     const response = await fetch('http://localhost:9090/invoice',
     {
         method:'POST',
         body:JSON.stringify(invoice),
         headers:{
             'Content-Type':'application/json'
         }
     })
     const data= await response.json();
     console.log(data)
     console.log(form);
     setIsLoginModalOpen(false);
     }
  const handleSubmit= async (from)=>{
      //alert("CheckOut Person Successfully")

      const response = await fetch('http://localhost:9090/demo',
      {
          method:'PUt',
          body:JSON.stringify(form),
          headers:{
              'Content-Type':'application/json'
          }
      })
      const data= await response.json();
      console.log(data)
      console.log(form);
      setIsLoginModalOpen(false);
      }
      const count=Math.random()*10000000
      const Invoice=Math.round(count)
  
  return (
    <div>
    
      <div>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-success"><Link to={'/'}><i className="bi bi-house-fill">Home</i></Link></button>
                    <button type="button" className="btn btn-danger"><Link to={'/data'}>DETAILS</Link></button>
                    <button type="button" className="btn btn-warning"><Link to={'/update'}>UPDATE</Link></button>
                    
            </div>
            <div>
            <Modal
           isOpen={isLoginModalOpen}
           style={customStyles}

            >
              
               <button className='btn btn-danger' style={{float:'right'}} onClick={()=>setIsLoginModalOpen(false)}>X</button>
               <form >
              
                
                <div className="App2">
                <label>Invoice Number:-  </label>
                <input type="Number" name='invoice' id="invoice" onChange={handleInvoice}  />
                </div>
                <div className="App2">
                <label>CheckOut Date:- </label>
                <input type="date" name='CheckOutDate' id="CheckOutDate" onChange={handleInvoice} />
                </div>
                <div className="App2">
                    <label>Upload invoice :- </label>
                    <input name="invoiceimg" id="invoiceimg" type="file" onChange={(e)=>{
                        uploadImage(e);
                        }} />   
                        
                </div>
                <input type='submit' onClick={handleSubmit2}/> 
               </form>

        </Modal>
            </div>
      </div>

<div>
  <div>
   
  <table className="table">
  <thead>
  <tr className="table-primary">
    <th scope="col">Name</th>
    <th scope="col">Contact</th>
    <th scope="col">Email</th>
    <th scope="col">Pax</th>
    <th scope="col">Rate</th>
    <th scope="col">Amount</th>
    <th scope="col">check In/Out</th>
    <th scope="col">Days</th>
    <th scope="col">Action</th>
  </tr>
  </thead>
  {
    
    // user.map((user)=><ol key={user._id}><li>console.log({user.userName})</li></ol>)
   user.map((user, id)=>
              <tbody className="table-group-divider" key={id}>
              <tr key={user._id}>
              <td scope="row"> <Link to={`/${user.userName}`} key={user._id}>  {user.userName} </Link></td>
             
 
  <td>{user.mobileNumber}</td>
  <td>{user.email}</td>
  <td>{user.pax}</td>
  <td>{user.rate}</td>
  <td>{user.Amount}</td>
  <td>{user.check}</td>
  
  <td>{user.days}</td>
  
  <td>
  
  {
    invoice? <button onClick={(e)=>handleForm(e)} value={user._id} name="_id">CheckOut</button>:<button value={user._id} name="_id" onClick={(e)=>setIsLoginModalOpen(true,e)}>CheckOut</button>
  }
  <button><Link to={`/update/${user._id}`} key={user._id} value={user._id}>  Update</Link></button>
  </td>
  </tr>
  </tbody>
  )
  }
</table>
</div>
</div>
</div>
  );
    }
