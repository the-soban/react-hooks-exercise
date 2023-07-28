import React, { useRef, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hassan";
    }, []);

    return(
        <>
            <h1>useLayoutEffect hook example 1:</h1>
            <input value="Soban" ref={inputRef} />
            <hr />
        </>
    );
}

export default UseLayoutEffect;