"use client";

import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(1);

    const increment = () => { setCount(count + 1);}
    const decrement = () => { setCount(count - 1);}
    return(
            <div className="flex justify-center">
                <div className="relative">
                    <input 
                        className="w-full h-10 mr-2 pl-3 text-2xl bg-gray-500 rounded-lg" 
                        type="text" 
                        value={count} 
                    />
                    <button
                        disabled={count==20} 
                        className="absolute right-44 top-1 text-green-500 text-2xl bg-purple-600 size-8 hover:bg-gray-400 rounded-lg mr-2" 
                        onClick={increment}>
                        +
                    </button>

                    <button 
                        disabled={count==1} 
                        className="absolute right-36 top-1 text-center text-red-500 text-2xl bg-yellow-300 size-8 hover:bg-gray-400 rounded-lg" 
                        onClick={decrement}>
                        -
                    </button>

                    <select
                        name="category"
                        id="category"
                        className="absolute right-0 rounded-r-lg bg-gray-700 text-white pl-2 h-10"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen">Frozen Foods</option>
                        <option value="Canned">Canned Goods</option>
                        <option value="Dry">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
    );
}