"use client"
import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals);
    } catch(error) {
        console.log("Error fetching meals", error);
    }
};

export default function MealIdeas() {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        setMeals(fetchMealIdeas({ingredient}));
    }
    
    useEffect(() => {
        loadMealIdeas();
    }, []);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <div>
                <select onChange={(event) => fetchMealIdeas(event.target.value)}>
                    {meals.map((meal) => (
                        <option key={meal.idMeal} value={meal.strMeal}>{meal.strMeal}</option>
                    ))}
                </select>
            </div>
            <div>
                <img src={meals.strMealThumb} alt="Meal Idea" />
            </div>
        </div>
    )
}