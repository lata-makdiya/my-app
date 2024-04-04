import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import Navbar from '../../layouts/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/CounterSlice';

export default function User() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Redux Count {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
            {/* <header>
                <Sidebar />
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <div className="container pt-4"> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            {/* </div>
            </main> */}
        </>
    )
}
