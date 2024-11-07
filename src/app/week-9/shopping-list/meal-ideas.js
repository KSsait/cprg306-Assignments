"use client"

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        return response.json();
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            if (ingredient) {
                setMeals(fetchedMeals.meals || []);
            }
            else
            {
                setMeals([]);
            }
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Meal Ideas</h1>
            {ingredient ? ( meals.length > 0 ? (
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt="meal" style={{width: '50px', height: '50px'}} />
                    </li>
                ))}
            </ul>
            ) : (
                <p>No meal ideas found</p>
            )
            ) : (
                <p>Select an ingredient to see meal ideas</p>
            )}
        </div>
    );
}