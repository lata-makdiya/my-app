import React, { useState } from 'react'

export default function Form() {
    let [name, setName] = useState('');
    let [dropdown, setDropdown] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            console.log('submitted');
        } else {
            alert('Please enter name');
        }
    };

    let inputName = (e) => {
        if (e.target.value === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={inputName} placeholder='Name' />

                <select value={dropdown} onChange={(e) => setDropdown(e.target.value)} >
                    <option value="">Select Standard</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
