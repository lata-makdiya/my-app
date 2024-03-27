import { useState, createContext, useContext } from "react";
import { UserContext } from './UseContextHookComponent';

export default function ChildComponent() {
    const user = useContext(UserContext);
    let getData;

    function appendData() {
        getData = 'Child Component';
        console.log('click');
    }

    return (
        <>
            {/* <h2>{`Hello ${user} again!`}</h2> */}
            <h3>Child Component</h3>
            <button onClick={appendData}>click Here</button>
        </>
    );
}
