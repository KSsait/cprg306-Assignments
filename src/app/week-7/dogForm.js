"use strict";
import { useState } from "react";

export default function DogForm({onAddDog}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);


    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 10000);
        let dog = {id, name, age};

        if (name && age) {
            onAddDog(dog)
            setName("");
            setAge(0);   
    }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(event) => setAge(parseInt(event.target.value) || 0 )}
                />
            </label>
            <button type="submit">Add Dog</button>

        </form>
    );
}