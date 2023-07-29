import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const UseContext = () => {
    const [username, setUsername] = useState("");

    return(
        <div>
            <h1>useContext hook example 1:</h1>
            <Login setUsername={setUsername} />
            <User username={username} />
            <hr />
        </div>
    );
}

export default UseContext;