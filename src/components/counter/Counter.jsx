import './Counter.css';
import React, { Component } from "react";

class Counter extends Component {

    state = {
        number: this.props.initNumber || 0,
        step: this.props.step || 1,
    };

    // Alternative to bind 'this' if it not use arrow function
    // constructor(props) {
    //     super(props);

    //     this.increment = this.increment.bind(this);
    // }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    }

    setStep = e => {
        this.setState({
            step: +e.target.value,
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput">Passo: </label>
                    <input 
                        id="stepInput" 
                        value={this.state.step} 
                        onChange={this.setStep}
                        type="number"
                    />
                </div>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }

}

export default Counter;