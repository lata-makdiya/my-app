import React, { useState, useEffect, Fragment } from 'react';

export default function PostRequestComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            // method: "POST",
            method: "PUT",
            // method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
            // on post request we need to send data for create new record
            // body: JSON.stringify({name:"User"})
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            Post Request
        </div>
    )
}
