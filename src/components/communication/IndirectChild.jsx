import React from "react";

const IndirectChild = props => {

    const max = 50;
    const min = 18;

    const randomNumber = () => parseInt(Math.random() * (max - min)) + min;

    let sortedNumber = randomNumber();

    return (
        <div>
            <button onClick={() => props.setParentInfo('Texto', sortedNumber, sortedNumber % 2 === 0)}> 
                Invocar comunicação Indireta com Hooks
            </button>
        </div>
    )
}

export default IndirectChild;