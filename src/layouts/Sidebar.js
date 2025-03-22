import PropTypes from 'prop-types';
import Dashboard from '../content/Dashboard';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink as Link,
} from "react-router-dom";
import StyleComponent from '../practice/style/StyleComponent';

let Sidebar = (props) => {
    // console.log('sidebar rendered');
    return (
        // <div>This is Sidebar, {props.menu[0]}</div>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <div>
                        <Link to="/">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/users">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Users</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/form-validation">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Form Validation</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/users/1">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>user Details</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/posts">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Posts</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/redux-form">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Redux Form</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/todo">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>TODO List</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/form">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Form</span>
                        </Link>
                    </div> 
                    
                    <div>
                        <Link to="/api-crud">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>API CRUD</span>
                        </Link>
                    </div> 
                    {/* <a href="#" className="list-group-item list-group-item-action py-2 active" data-mdb-ripple-init>
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Website traffic </span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a> */}
                </div>
            </div>
        </nav >
    );
}

export default Sidebar;

// export let firstMenu = 'Dashboard';

// let secondMenu = "Users";
// export { secondMenu };

// Sidebar.propTypes = {
//     menu: PropTypes.array.isRequired
// }

// Sidebar.defaultProps = {
//     menu: [firstMenu]
// }

