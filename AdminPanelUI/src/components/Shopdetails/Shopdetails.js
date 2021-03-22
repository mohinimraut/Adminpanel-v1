import React from "react";
import Modal from "react-responsive-modal";
import Select from "react-select";
// import ListComponent from "../List/ListComponent";
import "./Shopdetails.css";
class Shopdetails extends React.Component {
  state = {
    shopid: "",
    shopaddress: "",
    productname: "",
    productcostprice: "",
    productsellingprice: "",
    productcategory: "",
    _id: {},
    text2: "",
    text: "",
    mygrades: [{ _id: 1, grade: "loading" }],
    myproducts: [{ _id: 1, productname: "loading" }],
    myshops: [{ _id: 1, shopname: "loading" }],
    sform: false,
    sign: false,
    login: false,
    message: "",
  };
  componentDidMount() {
    fetch("http://localhost:5000/getShops")
      .then((res) => res.json())
      .then((res2) => {
        console.log("fvvvvv" + JSON.stringify(res2));
        this.setState({
          mygrades: res2,
        });
      });
  }
  handleSubmit(e) {
    e.preventDefault();

    // const url = "http://localhost:5000/sent";

    var data = new URLSearchParams();

    for (const pair of new FormData(e.target)) {
      // console.log(pair)
      data.append(pair[0], pair[1]);
    }
    //localhost:5000/sent
    fetch("http://localhost:5000/addShop", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res2) => {
        this.setState({
          mygrades: [...this.state.mygrades, res2],
        });
      });
    alert("Shop added successfully");
  }

  handleSubmit6(e) {
    const shopname = this.state.shopname;

    e.preventDefault();

    // const url = "http://localhost:5000/sent";

    var data = new URLSearchParams();

    for (const pair of new FormData(e.target)) {
      // console.log(pair)
      data.append(pair[0], pair[1]);
    }
    //localhost:5000/sent
    fetch("http://localhost:5000/addPro", {
      method: "post",
      body: data,

      shopname: this.state.shopname,
      _id: this.state._id,
    })
      .then((res) => res.json())
      .then((res2) => {
        this.setState({
          myproducts: [...this.state.myproducts, res2],
        });
      });
    alert("Product added successfully");
  }

  handleSubmitModal(e) {
    alert("********************");

    console.log("this.state.selectedOption", this.state.selectedOption);
    console.log("this.state.selectedOption2", this.state.selectedOption2);

    const gname = this.state.gname;
    const selectedOption = this.state.selectedOption;
    const selectedOption2 = this.state.selectedOption2;
    const min = this.state.min;
    const max = this.state.max;
    const avg = this.state.avg;

    const rem = this.state.rem;
    const impurity = this.state.impurity;
    const density = this.state.density;
    const hardness = this.state.hardness;
    const gradeFormData = {
      gname: gname,
      selectedOption: selectedOption,
      selectedOption2: selectedOption2,
      min: min,
      max: max,
      avg: avg,
      rem: rem,
      density: density,
      impurity: impurity,
      hardness: hardness,
    };

    alert(JSON.stringify(gradeFormData));

    console.log(JSON.stringify(gradeFormData));

    fetch("http://localhost:5000/gradeedit", {
      method: "post",
      body: gradeFormData,
    })
      .then((res) => res.json())
      .then((res2) => {
        this.setState({
          message: "Success",
        });
      });
  }

  handleSubmitModal2(e) {
    alert("modal2");
    const shopid = this.state.shopid;
    const shopname = this.state.shopname;
    const shopaddress = this.state.shopaddress;
    const productname = this.state.productname;
    const productcostprice = this.state.productcostprice;
    const productsellingprice = this.state.productsellingprice;

    const productFormData = {
      shopid: shopid,
      shopname: shopname,
      shopaddress: shopaddress,
      productname: productname,
      productcostprice: productcostprice,
      productsellingprice: productsellingprice,
    };

    alert(JSON.stringify(productFormData));

    console.log(JSON.stringify(productFormData));

    fetch("http://localhost:5000/addProduct", {
      method: "post",
      body: productFormData,
    })
      .then((res) => res.json())
      .then((res2) => {
        this.setState({
          message: "Success",
        });
      });
  }

  deleteGrade(id) {
    alert(id);
    // fetch('/removegrade/'+id,{method:"delete"})

    fetch("http://localhost:5000/removegrade/" + id, { method: "delete" })
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        const newGrades = this.state.mygrades.filter((item) => {
          return item._id !== res2._id;
        });

        this.setState({ mygrades: newGrades });
      });
  }
  onOpenModal = (object) => {
    this.setState({
      sign: true,
      shopname: object.shopname,
      _id: object._id,
      shopaddress: object.shopaddress,
      shopid: object._id,
    });
    // this.props.history.push("/productdetails")
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };
  moveProductDetail = (list) => {
    this.props.history.push("/addproducttest", { list });
    // alert(list.shopname)
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  handleChangeProductName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangeCostPrice = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangeSellingPrice = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  Sizehandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangeCategory = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeDen = (e) => {
    console.log(e);
    this.setState({ density: e.target.value });
    // this.props.onChange(e);
  };

  impFunction = (e) => {
    console.log(e);
    this.setState({ impurity: parseFloat(e.target.value) });
    this.props.onChange(e);
  };
  clearInput(e) {
    console.log(this.state.min);
    this.setState({});
  }

  render() {
    var obj = JSON.stringify(this.state.selectedOption);

    var obj2 = JSON.stringify(this.state.selectedOption2);

    // var firstKey = Object.keys(obj).value;
    var average = (parseFloat(this.state.min) + parseFloat(this.state.max)) / 2;

    const { selectedOption } = this.state;

    const { selectedOption2 } = this.state;
    const { login, sign } = this.state;
    const list = this.state.mygrades.map((item) => {
      console.log("20marchitem", item);
      return (
        <div>
          <a className="collection-item" key={item._id} id="shoplistcollecont">
            {/* <a id="signup" onClick={this.onOpenModal.bind(this, item)}> */}
            <a
              onClick={this.moveProductDetail.bind(this, item)}
              id="shoplistingdetails"
            >
              <div id="listingitems">
                <div>Shop Name : {item.shopname}</div>
                {/* <a
                class="material-icons right waves-light blue"
                onClick={() => this.deleteGrade(item._id)}
              >
                Delete
              </a> */}

                <div>Address : {item.shopaddress}</div>
              </div>
            </a>
          </a>

          <div style={{ background: "green" }}>
            {this.state.showForm ? this.showForm(item._id) : null}
          </div>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div class="container register-form">
          <div class="form" style={{ border: "1px solid rgb(158, 158, 158)" }}>
            <div class="note">
              <p id="shopheadparam">Shop Registration</p>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="shopname"
                      placeholder="Shop Name"
                      value={this.state.text}
                      onChange={(e) => this.setState({ text: e.target.value })}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="shopaddress"
                      placeholder="Shop Address"
                      value={this.state.text2}
                      onChange={(e) => this.setState({ text2: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="waves-effect waves-light btn"
                id="btnaddcrtshp"
              >
                Add
              </button>
            </form>
          </div>
          <div className="collection">
            <div style={{ fontSize: "20px" }}>Shop Lists</div>

            {list}
          </div>
        </div>

        <div>
          <div
            className="navbar-collapse collapse in"
            id="navbarMain"
            aria-expanded="true"
            style={{ top: "65px" }}
          >
            <ul className="nav navbar-nav navbar-right"></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Shopdetails;



