import {useState} from 'react'

export default function UseCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue) // State to keep track of count

    // Function to increment count
    const increment = () => setCount(count + 1)

    // Returns count and increment function
    return [count, increment]

}
