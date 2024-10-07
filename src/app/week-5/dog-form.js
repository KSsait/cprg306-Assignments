"use client"
import {useState} from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        let dog = {name, breed, age};
        console.log(dog);
        setName("");
        setBreed("");
        setAge(0);
    };
    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.trim(); //remove whitespace
        name = name.replace(/[^a-zA-Z0-9\s]/g, ""); //remove special characters
        setName(event.target.value);
    };

    
    return (
        <div>
            <h1 className="text-center text-6xl m-10 mb-20">Dog Form</h1>
            <form>
                <label className="text-4xl text-green-500">Dog Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-black"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                />

                <label className="text-4xl text-green-500">Dog Breed:</label>   
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    className="border border-black"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />

                <label className="text-4xl text-green-500">Dog Age:</label> 
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="border border-black"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />

                <button type="submit">Submit</button>
                <div> {name.length !== 13 && <p>Name Must be 13 characters</p>}  </div>
            </form>
        </div>
    )
}
