import React, {useState, useMemo, useEffect} from 'react'

export default function UseMemoComponent() {
    const [count, setCount] = useState(1);

   
    let countIncrease = () => {
        setCount(count + 1);
    }

     let stopRender = useMemo(() => {
         return (
            <h1>No Render Element {count}</h1>
         )
     }, [])

    return (
        <>
        {stopRender}
        <h1>This will change {count}</h1>
            <button onClick={countIncrease}>count {count}</button>
        </>
    )
}
