import React from "react";
import './Card.css';

const Card = props => {
    const inlineCardStyle = {
        backgroundColor: props.color,
    };

    return (
        <div className="Card" style={inlineCardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Card;