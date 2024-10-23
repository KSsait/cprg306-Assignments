"use client"

import DogList from './dogList';
import {useState} from 'react';
import dogsData from './dogs-data.json';
import DogForm from './dogForm';

export default function Page()  {
    const [dogs, setDogs] = useState(dogsData);
    
    const handleAddDog = (dog) => {
        setDogs([...dogs, dog]);
    }
    const handleDeleteDog = (id) => {
        setDogs(dogs.filter((dog) => dog.id !== id))
    }

    return (
        <main className="bg-black h-screen">
            <h1 className="font-bold text-2xl text-center mb-4">Managing State</h1>

            <DogList dogs={dogs} onDeleteDog={handleDeleteDog}/>
            <DogForm onAddDog={handleAddDog}/>
        </main>
    );
}