/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link} from "react-router-dom";
import './index.css';
const Navbar = () => {
    return (
           <nav>
               <ul>
                 <li><Link to="/Home"> Home </Link></li>
                   <li><Link to="/About"> AboutUs </Link></li>
                   <li><Link to="/Contact"> ContactUs </Link></li> 
                   </ul>
                   <ul className="navbar-right">
                   <Link to ="/"> Login </Link>

               </ul>     
           </nav>
       );
};

export default Navbar;
