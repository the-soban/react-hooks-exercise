import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContext = () => {
    const [username, setUsername] = useState("");

    return(
        <AppContext.Provider value={{ username, setUsername }}>
            <h1>useContext hook example 1:</h1>
            <Login />
            <User />
            <hr />
        </AppContext.Provider>
    );
}

export default UseContext;