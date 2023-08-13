import React from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/Add Products">Add Products</Link></li>   
            <li><Link to="/Update Product">Update Product</Link></li>  
            <li><Link to="/Logout">Logout</Link></li>   
            <li><Link to="/Profile">Profile</Link></li> 
            <li><Link to="/SignUp">Sign Up</Link></li>  
            </ul>
        </div>
    );
}

export default Nav;