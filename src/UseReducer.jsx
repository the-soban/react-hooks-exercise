import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return(
        <>
            <h1>useReducer hook example 1:</h1>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({type: "increment"});
                dispatch({type: "toggleShowText"});
            }}>Increment</button>
            {state.showText && <p>This is some text</p>}
            <hr />
        </>
    );
}

export default UseReducer;