import { useEffect, useState } from "react";
import SubFunctionLifeCycleComponent from "./SubFunctionLifeCycleComponent";

function FunctionLifeCycleComponent() {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        console.log('Component initialized');
    });

    // conditional use effect, add state
    useEffect(() => {
        console.log('count increased');
    }, [count]);

    useEffect(() => {
        console.log('index increased');
    }, [index]);

    let countIncrease = () => {
        setCount(count + 1);
    }

    let indexIncrease = () => {
        setIndex(index + 1);
    }

    let changeVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <>
            <h1>Functional LifeCycle</h1>
            {visibility ? <SubFunctionLifeCycleComponent /> : ''}
            <button onClick={countIncrease}>count {count}</button>
            <button onClick={indexIncrease}>Index {index}</button>
            <button onClick={changeVisibility}>{ visibility ? 'Hide' : 'Show' }</button>
        </>
    )
}

export default FunctionLifeCycleComponent;