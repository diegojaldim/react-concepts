import React from "react";

const CounterStepForm = props => {

    return (
        <div>
            <label htmlFor="stepInput">Passo: </label>
            <input 
                id="stepInput" 
                value={props.step} 
                onChange={e => props.setStep(e.target.value)}
                type="number"
            />
        </div>
    )
}

export default CounterStepForm;