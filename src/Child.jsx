import React, { useEffect } from "react";

const Child = ({ returnData }) => {
    
    useEffect(() => {
        console.log("Function Called!");
    }, [returnData]);

    return(
        <div>
            {returnData(" Soban")}
        </div>
    );
}

export default Child;