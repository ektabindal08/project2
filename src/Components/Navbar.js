import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Navbar = () => {
    return (
       <BrowserRouter>
           <nav>
               <ul>
                   <li><Link to="/About"> AboutUs </Link></li>
                   <li><Link to="/Contact"> ContactUs </Link></li>
               </ul>
               
           </nav>
       </BrowserRouter>
       
       );
};

export default Navbar;
