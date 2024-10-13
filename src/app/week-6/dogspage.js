"use client"

import { useState } from "react";   
import Image from "next/image";
import dogsJson from "./dogs.json";

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(-1);
    let dogs = [...dogsJson];

    dogs.sort((a, b) => a.name.localeCompare(b.name));
    dogs = dogs.filter((dog) => dog.id !== 2);

    const handleClick = (id) => {
        if (id === selectedDogId) {
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id)
    }    

    
    return (
        <main className='bg-black h-screen'>
            <h1 className="font-bold text-2xl text-center mb-4">Shopping List</h1>
            <p>Currently selected id: {selectedDogId} </p>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.id} onClick={()=> handleClick(dog.id)} className={`flex ${ dog.id === selectedDogId ? "bg-slate-200" : "bg-slate-500" } m-10`}>
                       <h2 className="text-xl m-4">{dog.name}</h2>
                       <p className="m-6">{dog.description}</p>
                       <Image src={dog.imageUrl} alt={dog.name} width={300} height={200} />
                       </li>
                    ))}
            </ul>
        </main>
    );
}