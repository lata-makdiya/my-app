function Navbar(props) {
    return (
        <div>This is Navbar, Company Name is {props.companyName}</div>
    );
}

Navbar.defaultProps = {
    companyName: "Google"
}
export default Navbar;