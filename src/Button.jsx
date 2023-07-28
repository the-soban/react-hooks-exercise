import React, { forwardRef, useState, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        changeToggle(){
            setToggle(!toggle);
        },
    }));

    return(
        <>
            <button>Child Button</button>
            {toggle && <p>Toggle is ON</p>}
        </>
    );
});

export default Button;