"use client";

import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(1);

    const increment = () => { setCount(count + 1);}
    const decrement = () => { setCount(count - 1);}
    return(
        <div className="text-center">
                <input className="inline-flex relative w-60 h-20 mr-2 text-6xl bg-gray-500 rounded-lg" type="text" value={count} />
                <button disabled={count==20} className="text-green-500 text-6xl bg-purple-600 size-16 hover:bg-gray-400 rounded-lg mr-2" onClick={increment}>+</button>
                <button disabled={count==1} className="text-red-500 text-6xl bg-yellow-300 size-16 mt-6 hover:bg-gray-400 rounded-lg" onClick={decrement}>-</button>
        </div>
    );
}