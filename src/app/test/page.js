"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (name) => {
        let itemReplace = name.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]| /g,'').trim().split(",");
        setSelectedItemName(itemReplace);
      }

    useEffect(() => {
        if (!selectedItemName) {
            setSelectedItemName("");
        }
    }, [selectedItemName]);

    return (
        <main className="bg-black h-screen">
            <h1 className="font-bold text-2xl text-center mb-4">Shopping List</h1>
            <div className="flex flex-col">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div>   
               <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );        
}