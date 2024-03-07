// import logo from './logo.svg';
import './App.css';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';

function App() {
  // let lang = 'JS';
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
      <Navbar companyName="Microsoft"/>
      <Sidebar menu={['home', 'about']} />
      <Footer details={{name: 'default user', mobile: 9999999999}}/>
    </>
  );
}

export default App;
