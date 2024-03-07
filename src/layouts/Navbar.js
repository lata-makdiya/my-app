import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <div>This is Navbar, Company Name is {props.companyName}</div>
    );
}

Navbar.defaultProps = {
    companyName: 44
}

Navbar.propTypes = {
    companyName: PropTypes.string 
}

export default Navbar;