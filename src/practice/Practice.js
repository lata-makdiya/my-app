// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import React, { useState } from 'react';
// import ClassComponent from './lifecycle/ClassComponent';
// import FunctionHookComponent from './hook/FunctionHookComponent';
import UseRefComponent from './hook/UseRefComponent';
import Form from './lifecycle/Form';

function Practice() {
  // let [msg1, msg2] = useState(true);
  // let lang = 'JS';
  // console.log(useState('Before click event'));

  // let message = 'Before click event';
  // console.log(message)

  // let clickEvent = () => {
  //   // message = 'After click event';
  //   msg2(msg1 + 1);
  //   // console.log(message)
  //   // alert('Clicked!');
  // }

  // let clickCapture = () => {
  //   // alert('This is Div.')
  // }

  // console.log(firstMenu, secondMenu);
  //  console.log('component rendered');
  return (
    // <h1>Hello World!, we are programming in {lang}</h1>
    // <div>
    //   <div>Div 1</div>
    //   <div>Div 2</div>
    // </div>

    // <>
    //   <label htmlFor="">Name</label>
    //   <input type="text" placeholder='Enter Name' className='input-field' id='name' />
    //   <img src={logo} alt="" />
    //   <FunctionComponent/>
    // 
    // </>

    // <div onClickCapture={clickCapture}>

    //   {conditionalRending ? <h3>Conditional Component</h3> : ''}

    //   {/* <div>{message}</div> */}
    //   <div>{msg1}</div>
    //   {/* We can change name of default import, not named import */}

    //   {/* do not use onclick or clickEvent() */}
    //   <button onClick={clickEvent}>Click Event</button> 

    //   {/* <button onClick={() => {
    //     alert('Show alert on click')
    //   }
    //   }>Show Alert</button> */}
    // </div>
    // <ClassComponent />
    // <FunctionHookComponent />
    // <UseRefComponent />
    <Form/>
  );
}

export default Practice;
