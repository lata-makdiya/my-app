import { useRef, useState, useEffect } from 'react';
import UseCounter from './UseCounter';

export default function UseRefComponent() {
    // let [count, setCount] = useState(0);
    let inputRef = useRef(null);
    const [count, setCount] = UseCounter();

    let changeInput = () => {
        // inputRef.current.value = 'Hello World!';
        // inputRef.current.focus();
        // inputRef.current.style.backgroundColor = 'red';
        // inputRef.current.style.color = 'white';
        // inputRef.current.style.width = '50%';
        // console.log(inputRef.current.clientWidth);
        setCount();
    }

    useEffect(() => {
        console.log('component rendered..');
    })

    return (
        <>
            <p>{count}</p>
            <input type="text" ref={inputRef} />
            <button onClick={changeInput}> Click </button>
        </>
    )
}
