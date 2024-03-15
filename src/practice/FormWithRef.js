import React, { useRef } from 'react'

export default function FormWithRef() {
    let name = useRef();

    let submitForm = (e) => {
        e.preventDefault();
        console.log(name.current.value);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" ref={name} placeholder='Name' />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
