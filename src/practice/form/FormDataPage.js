import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function FormDataPage() {
    const formData = useSelector((state) => state.formData.data);
    return (
        <>
            <Link to="/form">
                <span>Go To Form Page</span>
            </Link>
            <h1>{formData[0].name}</h1>
            <h1>{formData[0].email}</h1>
        </>
    )
}