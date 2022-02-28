import React from "react";
import DirectChild from "./DirectChild";

const DirectParent = props => {
    return (
        <div>
            <DirectChild 
                text="Child 1"
                number={20}
                bool={true}
            />
        </div>
    )
}

export default DirectParent;