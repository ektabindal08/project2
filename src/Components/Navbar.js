import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
const Navbar = () => {
    return (
       <BrowserRouter>
           <nav>
               <ul>
                   <li><Link to='/'>AboutUs</Link></li>
                   <li><Link to='/contact'>ContactUs</Link></li>
               </ul>
           </nav>
       </BrowserRouter>
       );
};


export default Navbar;
