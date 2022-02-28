import React from "react";

const Random = props => {
    const {
        min,
        max,
    } = props;
    const sort = Math.floor(Math.random() * (max - min)) + min;

    return (
        <>
            <p>Sortear Valores entre { min } - { max }</p>
            <p>Valor Sorteado = { sort }</p>
        </>
    )
}

export default Random;