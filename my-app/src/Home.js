import React, { useEffect, useState} from "react";
import './App.css'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { json, Link } from "react-router-dom"; 
import * as Yup from 'yup'
const initialValues={
    userName:'',
    email:'',
    mobileNumber:'',
    address:'',
    pax:'',
    StartingDate:'',
    endDate:'',
    rate:'',
    rate1:'',
    image:{
        frontImage:'',
        backImage:''

    }
}
 const onSubmit=values=>{
    alert("Form Successfully Submit", values.userName)
    const response = fetch('http://localhost:9090/demo',
        {
            method:'POST',
            body:JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
            }
        })
        //const data= response.json();
        //console.log(data)
        console.log(values);
   

}
const validationSchema = Yup.object({
    userName:Yup.string().required('Required!'),
    email:Yup.string().email('Invalid email format').required('Required!'),
    mobileNumber:Yup.number().required('Required!'),
    address:Yup.string().required('Required!'),
    pax:Yup.number().required('Required!'),
    StartingDate:Yup.date().required('Required!'),
    endDate:Yup.date().required('Required!'),
    rate:Yup.number().required('Required!'),
    rate1:Yup.number().required('Required!')

})
export function Home(){
return( 
    <div>
    <div className="App">
        <div>
             <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-success" style={{color:"white"}}><Link to={'/'}><i className="bi bi-house-fill">Home</i></Link></button>
                    <button type="button" className="btn btn-danger"><Link to={'/data'}>DETAILS</Link></button>
                    <button type="button" className="btn btn-warning"><Link to={'/update'}>UPDATE</Link></button>
                    
            </div>
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        <Form>
            <div className="form-control">
            <label htmlFor="UserName">Name</label>
            <Field
            type='text'
            id="userName"
            name="userName"
            />
            <ErrorMessage name="userName"/>
            </div>
            <div className="form-control">
            <label htmlFor="email">E-Mail</label>
            <Field
            type='email'
            id="email"
            name="email"
            />
            <ErrorMessage name="email"/>
            </div>
            <div className="form-control">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <Field
            type='Number'
            id="mobileNumber"
            name="mobileNumber"
            />
            <ErrorMessage name="mobileNumber"/>
            </div>
            <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field
            type='text'
            id="address"
            name="address"
            />
            <ErrorMessage name="address"/>
            </div>
            <div className="form-control">           
             <label htmlFor="pax">No Of Pax</label>
            <Field
            type='Number'
            id="pax"
            name="pax"
            />
            <ErrorMessage name="pax"/>
            </div>
            <div className="form-control">
            <label htmlFor="StartingDate">Start Date</label>
            <Field
            type='date'
            id="StartingDate"
            name="StartingDate"
            />
            <ErrorMessage name="StartingDate"/>
            </div>
            <div className="form-control">
            <label htmlFor="endDate">End Date</label>
            <Field
            type='date'
            id="endDate"
            name="endDate"
            />
            <ErrorMessage name="endDate"/>
            </div>
            <div className="form-control">
            <label htmlFor="rate">Rate Per Day</label>
            <Field
            type='Number'
            id="rate"
            name="rate"
            />
           <ErrorMessage name="rate"/>
            </div>
            <div className="form-control">
            <label htmlFor="rate1">Received Amount</label>
            <Field
            type='Number'
            id="rate1"
            name="rate1"
            />
            </div>
            <ErrorMessage name="rate1"/>
            <div className="form-control">
            <label htmlFor="file">Upload Image</label>
            <Field 
            name="image.frontImage" 
            id="frontImage"
            type="file"
            />
            <Field 
            name="backImage"
            id="image.backImage" 
            type="file" 
             />
             </div>
            <button >Submit</button>
        </Form>
    </Formik>
    </div>
 
    </div>
    </div>
)
}