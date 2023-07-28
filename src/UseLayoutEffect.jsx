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
            <input value="Soban" ref={inputRef} />
        </>
    );
}

export default UseLayoutEffect;