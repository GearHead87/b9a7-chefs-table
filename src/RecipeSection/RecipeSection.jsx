import { useEffect } from "react";
import { useState } from "react";

const RecipeSection = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipe-data.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[]);
    console.log(recipes);

    return (
        <div>
            <div className="text-center space-y-4 mt-10">
            <h1 className="text-5xl font-semibold ">Our Recipes</h1>            
            <p className="text-base">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

        </div>
    );
};

export default RecipeSection;