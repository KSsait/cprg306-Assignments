import { useState } from "react";

export default function CategoryField(){
    const [category, setCategory] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div className="flex flex-row justify-center items-center max-w-[250px]">
            <input 
                className="w-full h-20 mr-2 pl-3 text-6xl bg-gray-500 rounded-lg" 
                type="text" 
                value={category} 
                onChange={handleCategoryChange}
            />
        </div>
    );
}