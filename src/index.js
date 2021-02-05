import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Components/Routes';
import Btn from './Components/Button';
import Navbar from './Components/Navbar';


ReactDOM.render(
  <div>
   
    <Routes/>
    <Btn name = "Personal Information"/>
    <Btn name = "AboutUs"/>
    <Btn name = "ContactUs"/>
    <Navbar/>
    
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

