import PropTypes from 'prop-types';

let Sidebar = (props) => {
    return (
        <div>This is Sidebar, {props.menu[0]}</div>
    );
}

export default Sidebar;

export let firstMenu = 'Dashboard';

let secondMenu = "Users";
export {secondMenu};

Sidebar.propTypes = {
    menu: PropTypes.array.isRequired 
}

Sidebar.defaultProps = {
    menu: [firstMenu]
}

