"use client"
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch(error) {
        console.log("Error fetching meals", error);
        return [];
    }
};

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
    };

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <div>
                <ul>
                    {meals.length > 0 ? (meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))) : (
                        <li>No meal ideas found</li>
                    )}
                </ul>
            </div>
        </div>
    )
};