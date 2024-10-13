"use client"

import { useState } from "react";
import itemsJson from "./items.json";
import ShowGrouped from "./group";


export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    let items = [...itemsJson];
    items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    
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
                {items.map((item) => (
                    <li key={item.id} className={`m-3 p-2 bg-gray-700 w-80 text-center`}>
                        <h2 className="text-green-500 capitalize">{item.name}</h2>
                        <h2 className="text-blue-300">{item.quantity} {item.category}</h2>
                    </li>
                ))}
            </ul>

            {/* <ShowGrouped /> */}

        {/* <div className="flex flex-col justify-center items-center">
            <Item 
                name={items.name}
                quantity={item0.quantity}
                category={item0.category}
            />
            <Item
                name={item1.name}
                quantity={item1.quantity}
                category={item1.category}
            />
            <Item
                name={item2.name}
                quantity={item2.quantity}
                category={item2.category}
            />
            <Item
                name={item3.name}
                quantity={item3.quantity}
                category={item3.category}
            />
            <Item
                name={item4.name}
                quantity={item4.quantity}
                category={item4.category}
            />
            <Item
                name={item5.name}
                quantity={item5.quantity}
                category={item5.category}
            />
            <Item
                name={item6.name}
                quantity={item6.quantity}
                category={item6.category}
            />
            <Item
                name={item7.name}
                quantity={item7.quantity}
                category={item7.category}
            />
            <Item
                name={item8.name}
                quantity={item8.quantity}
                category={item8.category}
            />
            <Item
                name={item9.name}
                quantity={item9.quantity}
                category={item9.category}
            />
            <Item
                name={item10.name}
                quantity={item10.quantity}
                category={item10.category}
            />
            <Item
                name={item11.name}
                quantity={item11.quantity}
                category={item11.category}
            />
            <Item
                name={item12.name}
                quantity={item12.quantity}
                category={item12.category}
            />
        </div> */}
        </main>
    );
}