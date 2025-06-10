import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <div className="">
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(0)}>Raset</button>
            </div>
        </div>
    )
}

export default Counter
