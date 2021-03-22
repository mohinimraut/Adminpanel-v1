import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import "./Navbar.css";

function Navbar(props){
 
    return (
        <nav>
        <div id="navblue" className="nav-wrapper" style={{background:"#2C3D63"}}>
          <a id="brandlogo" href="#" className="brand-logo">Motabhaai</a>
          <ul id="nav-mobile" class="right">
            {/* <li><Link to="/">CreateShop</Link></li> */}
            {/* <li><Link to="/addproducttest">Add Product</Link></li> */}
            {/* <li><Link to="/productdetails">Product Details</Link></li> */}
            <li><Link to="/shopdetails">Shopdetails</Link></li>

          </ul>
        </div>
      </nav>
    )      

 
}

export default withRouter(Navbar);
