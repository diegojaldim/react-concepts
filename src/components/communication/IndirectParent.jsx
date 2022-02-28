import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

const IndirectParent = props => {

    let [textInfo, setTextInfo] = useState('?');

    let [numberInfo, setNumberInfo] = useState(0);

    let [boolInfo, setBoolInfo] = useState(false);

    const setInfo = (text, number, bool) => {
        setTextInfo(text);
        setNumberInfo(number);
        setBoolInfo(bool);
    }

    return (
        <div>
            <div>{textInfo}</div>
            <div>{numberInfo}</div>
            <div>{boolInfo ? 'Par' : 'Ímpar'}</div>
            <IndirectChild
                setParentInfo={setInfo}
            />
        </div>
    )
}

export default IndirectParent;