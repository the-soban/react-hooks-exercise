import React, { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>useState hook example 1:</h1>
            <button onClick={decrement}> - </button>
            <h2>{count}</h2>
            <button onClick={increment}> + </button>
            <hr />
        </div>
    );
}

export default UseState;