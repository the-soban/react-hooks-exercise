import React, { useState, useRef } from "react";

const UseRef = () => {

    const [name, setName] = useState("Soban");
    const inputRef = useRef(null);

    const clicked = () => {
        inputRef.current.focus();
        setName(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return(
        <>
            <h1>useRef hook example:</h1>
            <h2>Name: {name}</h2>
            <input type="text" placeholder="Enter your name..." ref={inputRef} />
            <button onClick={clicked}>Change Name</button>
            <hr />
        </>
    );
}

export default UseRef;