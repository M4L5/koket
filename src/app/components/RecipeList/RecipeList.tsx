'use client';

import { useState, useEffect } from "react";

import styles from "./RecipeList.module.scss";

import RecipeCard from "../RecipeCard/RecipeCard";
import { BASE_IMG_URL, testData } from "@/constant/urls";


interface Recipe {
    id: number;
    name: string;
    type: string,
    image: {
        url: string;
        name: string;
    };
    profiles: {
        name: string;
    }[];
}


const RecipeList = () => {
    const [ recipes, setRecipes ] = useState<Recipe[]>([]);
    const [ error, setError ] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(testData);

            if (!res.ok) {
                throw new Error(`${res.status}`)
            }

            const data = await res.json();
            setRecipes(data);
        
            // err must be type any
            } catch (err: any) {
                setError(err.message || "this is an error")
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className={styles.listContainer}>
            {error && <p>Error: {error}</p>}
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    src={BASE_IMG_URL + recipe.image.url}
                    alt={recipe.image.name}
                    dishTitle={recipe.name}
                    chef={recipe.profiles?.[0]?.name || null} 
                    sponsored={false}
                    type={recipe.type}
                />
            ))}
        </div>
    );
};

export default RecipeList;