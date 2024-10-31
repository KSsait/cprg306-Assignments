"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (item) => {
        const itemReplace = item.name.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]| /g,'').trim().split(",")[0];
        setSelectedItemName(itemReplace);
    }

    return (
        <main className="bg-black h-screen flex">
            <div className="flex flex-col m-5">
                <h1 className="font-bold text-2xl text-center mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>

            <div className="ml-5 mt-80">   
               <MealIdeas ingredient={selectedItemName}/>
            </div>   
        </main>
    );        
}