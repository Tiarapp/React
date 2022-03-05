import React, { Component } from "react";
// import { View, Image } from 'react-native';
// import './Product.css';

class CardProduct extends Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlerPlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handlerMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="data:image/jpeg;base64,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" alt="product_image" />    
                </div>
                <p className="product-title">Jam Tangan Cardiff</p>
                <p className="product-price">Rp. 430.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handlerMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlerPlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct