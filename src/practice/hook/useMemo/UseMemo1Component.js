import React, { useState, useMemo } from 'react';

function UseMemo1Component() {
    const [count, setCount] = useState(0);
    const [evenNum, setEvenNum] = useState(2)

    // function evenNumDouble() {
    //     console.log("double");
    //     return evenNum * 2;
    // }

    // return (
    //     <div>
    //         <h2>Counter: {count}</h2>
    //         <h2>Even Numbers: {evenNum}</h2>
    //         <h2>even Number Double Value: {evenNumDouble()}</h2>
    //         <button onClick={() => setCount(count + 1)}>Increment</button>
    //         <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
    //     </div>
    // )

    const memoHook = useMemo(function evenNumDouble() {
        return <h2>Counter: {count}</h2>
    }, [])

    return (
        <div>
            {memoHook}
            <h2>Even Numbers: {evenNum}</h2>
            {/* <h2>even Number Double Value: {memoHook}</h2> */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
        </div>
    )
}

export default UseMemo1Component;