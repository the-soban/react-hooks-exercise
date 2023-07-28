import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
    const btnRef = useRef(null);

    return(
        <>
            <h1>useImperativeHandle hook example 1:</h1>
            <button onClick={() => {
                btnRef.current.changeToggle();
            }}>Parent Button</button>
            <Button ref={btnRef}/>
            <hr />
        </>
    );
}

export default UseImperativeHandle;