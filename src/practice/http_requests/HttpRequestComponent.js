import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function HttpRequestComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/data')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <>
            {/* {data.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
            ))} */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>See Post</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        // console.log(data)
                        <Fragment key={data.id}>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>
                                    {/* <button className='btn btn-info'>See Post</button> */}
                                    <Link to={`/post/${data.id}`}>
                                        See Post
                                    </Link>
                                </td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </>
    )
}
