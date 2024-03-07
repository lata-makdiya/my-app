// import logo from './logo.svg';
import './App.css';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar1, { firstMenu, secondMenu } from './layouts/Sidebar';
import { useState } from 'react';

function App() {
  // let lang = 'JS';
  // console.log(firstMenu, secondMenu);
  console.log(useState('Before click event'));
  let [msg1, msg2] = useState('Before click event');

  let message = 'Before click event';
  // console.log(message)
  let clickEvent = () => {
    message = 'After click event';
    msg2('After click event');
    // console.log(message)
    alert('Clicked!');
  }
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

    <>
      <div>{message}</div>
      <div>{msg1}</div>
      <Navbar companyName="Microsoft" />
      {/* We can change name of default import, not named import */}
      <Sidebar1 menu={['home', 'about']} />
      <Footer details={{ name: 'default user', mobile: 9999999999 }} />
      {/* do not use onclick or clickEvent() */}
      <button onClick={clickEvent}>Click Event</button> 
    </>
  );
}

export default App;
