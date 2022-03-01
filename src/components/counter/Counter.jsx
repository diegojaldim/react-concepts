import './Counter.css';
import React, { Component } from "react";
import CounterDisplay from './Display';
import CounterButtons from './Buttons';
import CounterStepForm from './StepForm';

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

    setStep = newStep => {
        this.setState({
            step: +newStep,
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Contador</h2>
                <CounterDisplay 
                    number={this.state.number}
                />
                <CounterStepForm
                    step={this.state.step}
                    setStep={this.setStep}
                />
                <CounterButtons
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                />
            </div>
        )
    }

}

export default Counter;