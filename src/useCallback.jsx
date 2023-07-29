import React, { useCallback, useState } from "react";
import Child from './Child';

const UseCallback = () => {
    const [data, setData] = useState("Hello World!");
    const [toggle, setToggle] = useState(true);

    const returnData = useCallback((name) => {
        return data + name;
    }, [data]);

    return(
        <div>
            <h1>useCallback hook example 1:</h1>
            <Child returnData={returnData} />
            <button onClick={() => {
                setToggle(!toggle);
            }} >Toggle</button>
            {toggle && <p>Toggle is ON</p>}
            <hr />
        </div>
    );
}

export default UseCallback;