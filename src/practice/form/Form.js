import React, { useState, useEffect } from 'react';
import { addData } from '../Redux/FormData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Form submitted:', { name, email });
        dispatch(addData({ name: name, email: email }));
        setName('');
        setEmail('');
        navigate('/form-data-page')
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
