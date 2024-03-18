import React from 'react';
import './style.css';
import Style from './style.module.css';

export default function StyleComponent() {
    return (
        <div>
            {/* background-color dont use like this, use  backgroundColor*/}
            <h1 style={{ color: "red", backgroundColor: "Black" }}>Hello World!</h1>
            <h2 className='name text-primary'>Chirag</h2>
            <h2 className={Style.name + ' text-warning'}>Gargi</h2>
        </div>
    )
}
