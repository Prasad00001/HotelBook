import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Data} from './Details';
import {Home} from './Home';
import {UpdateDays} from './Update';
import { New } from './New';


export function App() {
  return (
    <div >
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/data" element={<Data/>}/>
       <Route path="/update/:_id" element={<UpdateDays/>}/>
       <Route path="/:rName" element={<New/>}/>
      
       
     
       </Routes>
      
    </div>
  );
}


