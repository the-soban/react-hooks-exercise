import React, { useState } from "react";

const UseState2 = () => {

    const [value, setValue] = useState("");

    const valueChanger = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    }

    return(
        <>
            <h1>useState hook example 2:</h1>
            <input type="text" placeholder="Enter something..." onChange={valueChanger} />
            <br />
            <label>Value in input field: {value}</label>
            <hr />
        </>
    );
}

export default UseState2;