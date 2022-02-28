import React from "react";

const DirectChild = props => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.number}</div>
            <div>{props.bool ? 'True' : 'False'}</div>
        </div>
    )
}

export default DirectChild;