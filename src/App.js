import './App.css';
// import Navbar from './layouts/Navbar';
// import Footer from './layouts/Footer';
// import Sidebar1, { firstMenu, secondMenu } from './layouts/Sidebar';
import Practice from './practice/Practice';
import ClassComponent from './practice/lifecycle/ClassComponent';

function App() {
  // console.log(firstMenu)
  return (
    <>
      {/* <Navbar companyName="Microsoft" /> */}
      {/* We can change name of default import, not named import */}
      {/* <Sidebar1 menu={['home', 'about']} /> */}
      {/* <Footer details={{ name: 'default user', mobile: 9999999999 }} /> */}
      <Practice/>
      {/* <ClassComponent/> */}
    </>
  );
}

export default App;
