import React from 'react';
import { Link} from "react-router-dom";
import './index.css';
const Navbar = () => {
    return (
           <nav>
               <ul>
                   <li><Link to="/About"> AboutUs </Link></li>
                   <li><Link to="/Contact"> ContactUs </Link></li>
               </ul>
               
           </nav>
       );
};

export default Navbar;
