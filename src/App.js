import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
// import Sidebar1, { firstMenu, secondMenu } from './layouts/Sidebar';
import Practice from './practice/Practice';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/admin.css';
import './assets/css/mdb.min.css';
import UseContextHookComponent from './practice/hook/useContext/UseContextHookComponent';
import Dashboard from './practice/Router/Dashboard';
import User from './practice/Router/User';
import Route1 from './practice/Router/Route1';
import { Route, Router, Switch } from 'react-router-dom';

function App() {

  // console.log(firstMenu)
  return (
    <>
{/* <header>
        <Sidebar />
        <Navbar />
      </header>
      <Dashboard /> */}

{/* <Navbar companyName="Microsoft" /> */}
{/* We can change name of default import, not named import */}
{/* <Sidebar1 menu={['home', 'about']} /> */}
{/* <Footer details={{ name: 'default user', mobile: 9999999999 }} /> */}
{/* <Practice /> */}
{/* <UseContextHookComponent/> */}
      <Routes>
        <Route path="*" element={<Route1 />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
