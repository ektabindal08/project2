import React from 'react';
import { Link} from "react-router-dom";
import './index.css';
const Navbar = () => {
    return (
           <nav>
               <ul>
                   <li><Link to="/about"> AboutUs </Link></li>
                   <li><Link to="/contact"> ContactUs </Link></li>
                   <li><Link to="/profile"> Profile </Link></li>
               </ul>
               
           </nav>
       );
};

export default Navbar;
