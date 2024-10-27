"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    
    const groupBy = (array, key) => {
        return array.reduce((acc, obj) => {
          const keyValue = obj[key]; 
    
          if (!acc[keyValue]) {
            acc[keyValue] = [];
          }
          
          acc[keyValue].push(obj);
          return acc;
        }, {});
      };

    return (

        <main className="bg-black">
            <div className="flex justify-center mb-6 mt-8">
                <button onClick={() => setSortBy("name")} className=" bg-blue-700 text-white font-bold p-4 rounded-md mr-4">Sort By Name</button>
                <button onClick={() => setSortBy("category")} className=" bg-blue-900 text-white font-bold p-4 rounded-md mr-4">Sort By Category</button>
                <button onClick={() => groupBy(items, "category")} className=" bg-red-700 text-white font-bold p-4 rounded-md">Group By Category</button>
            </div>

            <ul className="flex flex-col items-center">
                {sortedItems.map((item) => (
                    <Item key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}> 
                    </Item>
                ))}
            </ul>
        </main>
    );
}