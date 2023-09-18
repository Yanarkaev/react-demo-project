import { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(prev => prev+=1)}>+</button>
            <b>{count}</b>
            <button onClick={() => setCount(prev => prev-=1)}>-</button>

        </div>
    );
};
