"use client";

import { useState } from "react";

export default function ShopForm(){
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = (event) => { event.preventDefault(); setQuantity(quantity + 1);}
    const decrement = (event) => { event.preventDefault(); setQuantity(quantity - 1);}

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "") 
        {
            alert("Please enter a name for the item.");
            return;
        }
        let item = {name, quantity, category};
        console.log(item);
        alert("Item Added to Cart!\n" + item.name + " x" + item.quantity + " from " + item.category); 
        setName("");
        setQuantity(1);
        setCategory("Produce");    
    };

    return(
        <form className="flex flex-col w-full">
            <div className="flex justify-center mb-2"> 
                <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Item Name"
                    className="border border-black text-black rounded-lg p-2 w-[310px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                />
            </div>

            <div className="flex justify-center">
                <div className="relative">
                    <input 
                        className="h-10 mr-2 pl-3 text-2xl bg-gray-500 rounded-lg" 
                        type="text" 
                        defaultValue={quantity}
                    />
                    <button
                        disabled={quantity==20}
                        className="absolute disabled:bg-gray-500 disabled:text-gray-500 right-44 top-1 text-green-500 text-2xl bg-purple-600 size-8 hover:bg-gray-400 rounded-lg mr-2" 
                        onClick={increment}>
                        +
                    </button>

                    <button 
                        disabled={quantity==1} 
                        className="absolute disabled:bg-gray-500 disabled:text-gray-500 right-36 top-1 text-center text-red-500 text-2xl bg-yellow-300 size-8 hover:bg-gray-400 rounded-lg" 
                        onClick={decrement}>
                        -
                    </button>

                    <select
                        name="category"
                        id="category"
                        value={category}
                        className="absolute right-0 rounded-r-lg bg-gray-700 text-white pl-2 h-10"
                        onChange={(e) => setCategory(e.target.value)}
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
            
            <div className="flex justify-center items-center">
                <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-600 rounded-lg p-2 mt-2 w-[310px] hover:bg-teal-700"
                >
                Add to Cart  
                </button>   
            </div>          
        </form>
    );
}