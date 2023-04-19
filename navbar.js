import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/download1.png';
function Navbar()
{
    return(
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div class="container">
  <Link to="/"><img src={logo} alt="Logo" style={{width:'50px',}} className="logo1" /></Link>
    <Link to="/" class="navbar-brand">WebApplications</Link> 

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link> 
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link active">About</Link> 
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link active">Contact</Link> 
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Navbar;