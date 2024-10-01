"use client";

import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(1);

    const increment = () => { setCount(count + 1);}
    const decrement = () => { setCount(count - 1);}
    return(
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center items-center max-w-[250px]">
            <input 
                className="w-full h-20 mr-2 text-6xl bg-gray-500 rounded-lg" 
                type="text" 
                value={count} 
            />
            <button 
                disabled={count==20} 
                className="absolute right-20 text-green-500 text-6xl bg-purple-600 size-16 hover:bg-gray-400 rounded-lg mr-2" 
                onClick={increment}>
                +
            </button>
            <button 
                disabled={count==1} 
                className="absolute text-center right-4 text-red-500 text-6xl bg-yellow-300 size-16 hover:bg-gray-400 rounded-lg" 
                onClick={decrement}>
                -
            </button>
        </div>
    );
}