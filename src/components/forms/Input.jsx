import React, { useState } from "react";

const Input = () => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = e => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h2>{inputValue}</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input type="text" onChange={onChangeInputValue} value={inputValue} />
                <input type="text" value={inputValue} readOnly />
                <input type="text" value={undefined} />
            </div>
        </div>
    )
}

export default Input;