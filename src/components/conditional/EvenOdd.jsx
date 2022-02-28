import React from "react";

const EvenOdd = props => {
    const isEven = props.number % 2 === 0;

    return (
        <div>
            <p>
                Número {props.number} é { isEven ? <span>Par</span> : <span>Ímpar</span> }
            </p>
        </div>
    )

}

export default EvenOdd;