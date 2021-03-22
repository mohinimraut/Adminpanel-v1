import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import ListComponent from "../List/ListComponent";
import './ProductDetails.css';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        // Don't do this!   
        this.state = {shopobject: props.shopobj };
       }
    render() {
        return (
            <div>
             
                <div>

                    <ListComponent />
                </div>
            </div>
        )
    }
}
