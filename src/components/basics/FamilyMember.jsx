import React from "react";

const FamilyMember = props => {
    return <div>
            <span>{props.firstName} {props.lastName}</span>
        </div>
};

export default FamilyMember;