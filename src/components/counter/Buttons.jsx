import React from "react";

const CounterButtons = props => {
    return (
        <div>
            <button onClick={props.onDecrement}>-</button>
            <button onClick={props.onIncrement}>+</button>
        </div>
    )
}

export default CounterButtons;