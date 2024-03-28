import { useState, createContext, useContext } from "react";
import { UserContext } from './UseContextHookComponent';

export default function ChildComponent() {
    // const user = useContext(UserContext);
    const {userData, getDataFromChild} = useContext(UserContext);
    let data = 'Data from child component';
 
    return (
        <>
            {/* <h2>{`Hello ${user} again!`}</h2> */}
            <h2>{`Hello ${userData} from child component!`}</h2>
            <h3>Child Component</h3>
            <button onClick={() => getDataFromChild(data)}>click Here</button>
        </>
    );
}
