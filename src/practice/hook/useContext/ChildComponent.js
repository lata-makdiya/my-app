import { useState, createContext, useContext } from "react";
import { UserContext } from './UseContextHookComponent';
import SuperChildComponent from "./SuperChildComponent";

export default function ChildComponent() {
    // const user = useContext(UserContext);
    const {userData, gettingDataFromChild} = useContext(UserContext);
    let data = 'Data from child component';
 
    return (
        <>
            {/* <h2>{`Hello ${user} again!`}</h2> */}
            <h3>Child Component</h3>
            <h2>{`Hello ${userData} from child component!`}</h2>
            {/* <SuperChildComponent/> */}
            <button onClick={() => gettingDataFromChild(data)}>click Here</button>
        </>
    );
}
