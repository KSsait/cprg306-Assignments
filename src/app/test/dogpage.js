"use client"

import { useState, useEffect } from "react";

export default function Page() {
    const [dogUrl, setDogUrl] = useState("");
    const [breeds, setBreeds] = useState([]);

    const getRandomDog = async (breed) => {

        
        try {
        const response = breed ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) :
                                 await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogUrl(data.message);
        } catch(error) {
            console.log("Error fetching image", error);
        }
    };

    const getDogBreeds = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            const data = await response.json();
            const breedsAsObject = data.message;
            const breeds = Object.keys(breedsAsObject);
            setBreeds(breeds);
            console.log(data.message);
        } catch(error) {
            console.log("Error fetching breeds", error);
        }
    };

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []);

    return(
        <div>
        <h1>Week 8 </h1>
        <div>   
            <select onChange={(event) => getRandomDog(event.target.value)}>
                {breeds.map((breed) => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
            </select>
        </div>
        <div>
            <img src={dogUrl} alt="Random Dog" />
        </div>
        </div>
    )

}