import { forwardRef } from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//     return (
//         <input type="text" ref={ref} />
//     )
// });

let MyInput = (props, ref) => {
    return (
        <input type="text" ref={ref} />
    )
}

export default forwardRef(MyInput);
