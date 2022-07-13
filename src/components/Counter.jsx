import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('ghbdtn');

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <h1>{count}</h1>
            <button onClick= {increment}>increment</button>
            <button onClick= {decrement}>decrement</button>
        </div>
    )
}

export default Counter;
