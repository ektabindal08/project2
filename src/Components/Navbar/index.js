/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link} from "react-router-dom";
import './index.css';
const Navbar = () => {
    return (
           <nav>
               <ul className="navbar-left">
                 <li><Link to="/Home"> Home </Link></li>
                   <li><Link to="/About"> AboutUs </Link></li>
                   <li><Link to="/Contact"> ContactUs </Link></li> 
                   <li><Link to="/Services"> Services</Link></li>
             </ul>
                   <ul className="navbar-right">
                 <li><Link to ="/Login"> Login </Link></li>  
                  <li> <Link to ="/Signup"> SignUp </Link></li>
               </ul>     
           </nav>
       );
};

export default Navbar;
