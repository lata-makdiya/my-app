import { useState, createContext, useContext } from "react";
import { UserContext } from './UseContextHookComponent';

export default function SuperChildComponent() {
    // const user = useContext(UserContext);
    const { userData, getDataFromChild } = useContext(UserContext);
    let data = 'Data from child component';

    return (
        <>
            {/* <h2>{`Hello ${user} again!`}</h2> */}
            <h2>{`Hello ${userData} from super child component!`}</h2>
            <h3>Super Child Component</h3>
        </>
    );
}
