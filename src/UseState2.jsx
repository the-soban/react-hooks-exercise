import React, { useState } from "react";

const UseState2 = () => {

    const [value, setValue] = useState("");

    const valueChanger = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    }

    return(
        <>
            <input type="text" placeholder="Enter something..." onChange={valueChanger} />
            <br />
            <label>Value in input field: {value}</label>
        </>
    );
}

export default UseState2;