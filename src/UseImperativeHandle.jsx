import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
    const btnRef = useRef(null);

    return(
        <>
            <button onClick={() => {
                btnRef.current.changeToggle();
            }}>Parent Button</button>
            <Button ref={btnRef}/>
            <hr />
        </>
    );
}

export default UseImperativeHandle;