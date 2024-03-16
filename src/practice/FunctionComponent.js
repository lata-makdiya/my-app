function FunctionComponent(props) {
    // let name = '';
    // switch (name) {
    //     case 'Chirag':
    //         console.log('Chirag');
    //         break;
    //     case 'Gargi':
    //         console.log('Gargi');
    //         break;
    //     case 'Jaydeep':
    //         console.log('Jaydeep');
    //         break;
    //     default:
    //         console.log('All Students');
    //         break;
    // }

    let enumObject = {
        'CHIRAG': <h1>Chirag</h1>,
        'GARGI': <h1>Gargi</h1>,
        'JAYDEEP': <h1>Jaydeep</h1>,
    }

    // let isRender = true;
    return (
        <>
            {/* {isRender && <h3>This is Function Component</h3>} */}
            {props.name != '' && props.name != undefined ? enumObject[props.name] : null}
        </>
    )
}

export default FunctionComponent;