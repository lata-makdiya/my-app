import { useRef } from 'react'

export default function UseRefComponent() {

    let inputRef = useRef(null);

    let changeInput = () => {
        inputRef.current.value = 'Hello World!';
        // inputRef.current.focus();
        // inputRef.current.style.backgroundColor = 'red';
        // inputRef.current.style.color = 'white';
        // inputRef.current.style.width = '50%';
        // console.log(inputRef.current.clientWidth);
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={changeInput}> Click </button>
        </>
    )
}
