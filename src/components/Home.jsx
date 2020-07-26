import React, { Component } from 'react'
import '../styles/home.css'
import Quantity from '../components/Quantity.jsx'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                        activeQuantity:this.props.quantities[0]
                    }
    }

    selectQuantity = (quantity) => {
        this.setState({activeQuantity:quantity})
    }

    render() {
        return ( 
            <main id="home">
                <div id="home-content">
                <span>Choose type</span>
                    <div id="home-content-quantities">
                        {this.props.quantities.map(quantity=><Quantity quantity={quantity} isActive={this.state.activeQuantity.name===quantity.name} key={quantity.name} onlick={this.selectQuantity}></Quantity>)}
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;