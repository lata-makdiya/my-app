import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
// import Sidebar1, { firstMenu, secondMenu } from './layouts/Sidebar';
// import Practice from './practice/Practice';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './content/Dashboard';
import './assets/css/admin.css';
import './assets/css/mdb.min.css';

function App() {
  // console.log(firstMenu)
  return (
    <>
      <header>
        <Sidebar />
        <Navbar />
      </header>

      <Dashboard />

      {/* <Navbar companyName="Microsoft" /> */}
      {/* We can change name of default import, not named import */}
      {/* <Sidebar1 menu={['home', 'about']} /> */}
      {/* <Footer details={{ name: 'default user', mobile: 9999999999 }} /> */}
      {/* <Practice /> */}
    </>
  );
}

export default App;
