import { useEffect } from "react";
import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import CookTable from "../CookTable/CookTable";

const RecipeSection = () => {
    const [recipes, setRecipes] = useState([]);
    const [cooks, setCooks] = useState([]);
    const [currentcooks, setCurrentCooks] = useState([]);

    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetch('recipe-data.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    const handleCook = (recipe) => {
        const isExists = cooks.find((cook) => cook.recipe_id === recipe.recipe_id);
        if (!isExists) {
            setCooks([...cooks, recipe]);
        }
        else{
            alert(`It looks like you've already added this recipe to your list.`);
        }
    }

    const handleCurrentCook = (cook) =>{
        setCurrentCooks([...currentcooks, cook]);
        const removeCooks = cooks.filter((ck)=> ck.recipe_id != cook.recipe_id)
        setCooks(removeCooks);
        setTotalTime(totalTime + cook.preparing_time );  
        setTotalCalories(totalCalories + cook.calories );  
    }


    return (
        <div>
            <div className="text-center space-y-4 mt-10">
                <h1 className="text-2xl lg:text-5xl font-semibold ">Our Recipes</h1>
                <p className="text-sm lg:text-base">Explore a delectable array of dishes waiting to tantalize your taste buds in our vibrant Our Recipes section.</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                    {
                        recipes.map((recipe) => (
                            <Recipes
                                key={recipe.recipe_id}
                                recipe={recipe}
                                handleCook={handleCook}
                            ></Recipes>

                        ))
                    }
                </div>
                <div className="w-full">
                    <CookTable
                        key={cooks.recipe_id}
                        cooks={cooks}
                        currentcooks={currentcooks}
                        handleCurrentCook={handleCurrentCook}
                        totalTime={totalTime}
                        totalCalories={totalCalories}
                    ></CookTable>
                </div>
            </div>
        </div>
    );
};

export default RecipeSection;