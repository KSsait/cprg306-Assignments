"use client"

import { useState } from "react";

export default function Counter() { 
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1); 

    const [person, setPerson] = useState({name: "Mario", age: 30});
    setPerson("Luigi", 34);
    setPerson((prevPerson) => ({...prevPerson, name: "Luigi", age: 31}));
    };

    return (
        <main>
            <div>
                <h2>Counter</h2>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>

            <div>
                <h2>Person</h2>
                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
            </div>
        </main>
    )
}