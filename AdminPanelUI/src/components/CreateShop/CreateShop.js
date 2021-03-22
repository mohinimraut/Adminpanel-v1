
import './CreateShop.css';
import React from 'react';
import axios from 'axios';

export default class createShop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shopname:"",
      shopaddress:"",
    
      
    }
    this.validateForm=this.validateForm.bind(this);
    this.onChangeInput=this.onChangeInput.bind(this)
}
validateForm(){
  const shopname=this.state.shopname;
  const shopaddress=this.state.shopaddress;
  
  
  if(shopname){
    this.setState({shopnameError:false})
  }else{
      this.setState({shopnameError:true}) 
  }
  
  if(shopaddress){
      this.setState({shopaddressError:false})
    }else{
        this.setState({shopaddressError:true}) 
    }
  
    
    
  var createShop={
      shopname:shopname,
            shopaddress:shopaddress,
           
  }
  
  
  console.log('=======---=======---',createShop);
    axios.post('http://localhost:3001/createshop',createShop)
    .then(function (response) {
      this.setState({message:'Success'})
    })
    .catch(function (error) {
      console.log(error);
    });
  
  
      }
      onChangeInput(event){
        const name=event.target.name;
        const value=event.target.value;
        
        this.setState({[name]:value})
        
            }
render(){
  return (
    <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Shop Registration</p>
                </div>

                <div class="form-content" onChange={(e)=>this.onChangeInput(e)}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="shopname" placeholder="Shop Name *" value={this.state.shopname}/>
                          
                                {/* <input type="text" className="form-control" style={{border:(this.state.firstnameError)?"1px solid red":''}} value={this.state.shopname} name="firstname" placeholder="Shop Name *" onChange={(e)=>this.onChangeInput(e)}/> */}
  </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="shopaddress" placeholder="Shop Address *" value={this.state.shopaddress}/>
                            </div>
                            
                        </div>
                    </div>
                    <button type="button" class="btnSubmit" value="Submit" onClick={this.validateForm}>Register</button>
                </div>
            </div>
        </div>
  );
}
 
}


