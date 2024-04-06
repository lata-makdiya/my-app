import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { storeString } from './StringSlice';

export default function Form() {
    const string = useSelector((state) => state.string.value)
    const dispatch = useDispatch();
    const name = useRef();

    const handleButtonClick = () => {
        dispatch(storeString(name.current.value));
    };

    return (
        <>
            <h1>{string}</h1>
            <input type="text" ref={name} />
            <button onClick={handleButtonClick}>Store String</button>
        </>
    )
}
