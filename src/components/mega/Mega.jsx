import React, { useState } from "react";

const Mega = () => {

    const [quantityNumbers, setQuantityNumbers] = useState(6);

    const [numbers, setNumbers] = useState(
        Array(quantityNumbers).fill(0)
    );

    const generateNotContentNumberInArray = arr => {
        const min = 1;
        const max = 60;
        const sort = Math.floor(Math.random() * (max + 1 - min)) + min;
    
        return arr.includes(sort) ? generateNotContentNumberInArray(arr) : sort;
    }

    const generateMegasenaNumbers = howManyNumbersMustGenerate => {
        return Array(howManyNumbersMustGenerate)
            .fill(0)
            .reduce(numbers => {
                const newNumber = generateNotContentNumberInArray(numbers);
                return [...numbers, newNumber];
            }, [])
            .sort((a, b) => a - b);
    }

    return (
        <div>
            <h2>Megasena</h2>
            <div>
                <label htmlFor="quantityNumbers">Quantidade de números: </label>
                <input 
                    type="number" 
                    id="quantityNumbers"
                    min="6"
                    max="60"
                    value={quantityNumbers} 
                    onChange={e => setQuantityNumbers(+e.target.value)} 
                />
            </div>
            {numbers.join(' - ')}
            <div>
                <button 
                    onClick={() => setNumbers(generateMegasenaNumbers(quantityNumbers))}>
                    Gerar números da Megasena
                </button>
            </div>
        </div>
    )
}

export default Mega;