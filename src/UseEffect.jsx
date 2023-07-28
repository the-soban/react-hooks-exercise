import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[4].email);
            console.log("API was called");
        });
    }, []);

    return(
        <>
            <h1>useEffect hook example:</h1>
            <h2>Email: {data}</h2>
            <hr />
        </>
    );

}

export default UseEffect;