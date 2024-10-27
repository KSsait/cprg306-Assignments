"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import items from "./item.js";

export default function Page() {
    const [itemList, setItemList] = useState(items);

    const handleAddItem = (item) => {
        setItemList([...itemList, item]);
    }

    return (
        <main className="bg-black h-screen">
            <h1 className="font-bold text-2xl text-center mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemList}/>
        </main>
    );        
}