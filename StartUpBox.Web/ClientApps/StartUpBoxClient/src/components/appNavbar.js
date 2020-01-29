
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

import Button from 'react-bootstrap/Button';


const AppNavbar = ({ }) => (


    <div className="row menu-bar">
    <div className="col-12 col-md-12 offset-lg-1 col-lg-11 ">
     <Navbar bg="transparent" collapseOnSelect expand="lg" className="d-flex"
     >
        
         <NavbarBrand href="~/" 
         className="col-7 ml-n3 ml-sm-0 col-sm-3 col-lg-3 col-xl-2 pl-lg-0 mr-1 scale-down">
        
         <img
                 src={`${process.env.PUBLIC_URL}/images/logo.svg`}

                 className="d-inline-block align-top  mr-4"
                 
             />
            STARTUP-BOX
        
         </NavbarBrand>
         

  <div className="col-4 col-sm-7 d-lg-none d-flex justify-content-end scale-down">
         <Button className="d-lg-none p-0 square-btn mr-2" variant="light"> <img
                 src={`${process.env.PUBLIC_URL}/images/bag-black.svg`}

                 className="d-inline-block align-top  m-1"
                 
             />
           </Button> 
           <NavbarToggle aria-controls="basic-navbar-nav"  className="square-btn"/>
  </div>
  

    
   
            
    



         <NavbarCollapse className="col-12 col-sm-9 col-lg-9 justify-content-end" id="basic-navbar-nav">

             <Nav className="" >

                 <NavLink className="mr-md-4" href="#">Home</NavLink>
                 <NavLink className="mr-md-4" href="#">Products</NavLink>
                 <NavLink className="mr-md-4" href="#">About</NavLink>
                 <NavLink className="mr-md-4" href="#">FAQ</NavLink>
                 <NavLink className="" href="#">contact</NavLink>
                 <NavLink className="d-none d-sm-block" href="#">
                 <img
                 src={`${process.env.PUBLIC_URL}/images/menu-icon.svg`}

                 className="d-inline-block align-top  mr-4 mt-1"
                 
             />
                 </NavLink>
                 <NavLink className="" href="#">  <Button variant="primary" type="submit" className="w-100">
                                             Start Here
                           </Button></NavLink>
             </Nav>

         </NavbarCollapse>

     </Navbar>

</div>
 </div>



)

export default AppNavbar;

