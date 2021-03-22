import React from 'react';
import CreateShop from './components/CreateShop/CreateShop'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
// import ItemGroup from './components/ItemGroup';

import Shopdetails from './components/Shopdetails/Shopdetails';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Addproducttest from './components/Addproducttest/Addproducttest';

class App extends React.Component{
  state={
   
    
  }
  componentDidMount(){
  
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
  <Navbar/>
  {/* <CreateShop/> */}
  {/* <Route exact path="/" component={CreateShop}/> */}
  <Route path="/addproducttest" component={Addproducttest}/>
  <Route path="/productdetails" component={ProductDetails}/>
  <Route path="/shopdetails" component={Shopdetails}/>


      </div>
      </BrowserRouter>
    );
  }
 
}

export default App;







// import logo from './logo.svg';
// import CreateShop from './components/CreateShop/CreateShop'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <CreateShop/>
//     </div>
//   );
// }

// export default App;
