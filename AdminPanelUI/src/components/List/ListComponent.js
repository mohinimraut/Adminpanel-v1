import React, { Component } from 'react';

class ListComponent extends Component {
  state = {
    todos: [],
    product_details:[],
    

  }
  componentDidMount() {
    
    fetch('http://localhost:5000/getShops')

  
    .then(res=>res.json())
    .then(res2=>{
      console.log("fvvvvv"+JSON.stringify(res2))
      this.setState({
        todos:res2,
        product_details:[]
      })
    })
  }
  selectProducts(e){
   
     this.setState({product_details:e.product_details})
    
   }
  render() {

    return (
       <div style={{}} className="container">
       
         <h1 id="" className="prodethead">Product Details</h1>
        
           
        <div className="col-md-6">
     
        {this.state.todos.map((todo) => (
          <div>
            
 <div id="shopcardproduct" className="card shopcard">
  
            <div className="card-body">
            <p id="shopnametitle" onClick={() => this.selectProducts(todo)} className="card-title">Shop_Name: {todo.shopname}</p>
              {/* <h5 className="card-title">{todo.productname}</h5> */}
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
             
              </h6>
            </div>
          </div>
          </div>
         
        ))}
        </div>



        <div id="productlisttable" style={{color:"black"}} className="col-md-6">
        <div class="container">
 
        {this.state.product_details.map(item => (
          <table id="protable" class="table table-bordered">
    <thead>
      <tr>
          
        <th id="pdname">Product_Name</th>
        <th id="pdname">Cost_Price</th>
        <th id="pdname">Category</th>
        <th id="pdname">Selling_Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="pdnametd">{item.productname}</td>
        <td id="pdnametd">{item.productcostprice}</td>
        <td id="pdnametd">{item.productcategory}</td>
        <td id="pdnametd">{item.productsellingprice}</td>
        
      </tr>
    
    </tbody>
  </table>
        ))}
  
</div>

        </div>





       </div>
    );
  }
}
export default ListComponent;







