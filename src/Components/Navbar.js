import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
    <>
    <Link  to= "/About" > AboutUs</Link>
    <Link  to= "/Contact" > ContactUs</Link>
    </>
    );
}
export default Navbar ;
