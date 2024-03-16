import PropTypes from 'prop-types';
import clock from '../assets/clock.svg';
import fire from '../assets/fire.svg';

const Recipes = ({recipe, handleCook }) => {
    // console.log(recipe);
    return (
        <>
            <div className="card bg-base-100 shadow-lg p-5">
                <figure><img className='rounded-2xl lg:w-80 ' src={recipe.recipe_image}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe.recipe_name}!</h2>
                    <p>{recipe.short_description}</p>
                    <hr className='border-x-2'></hr>
                    <p className='font-medium text-lg'>Ingredients: {recipe.ingredients.length}</p>
                    <ul>
                        {
                            recipe.ingredients.map((ingredient, index) =>(
                                <li key={index}>{ingredient}</li>
                                ))
                            }
                    </ul>
                    <hr className='border-x-2'></hr>
                    <div className='flex flex-row'>
                        <p className='inline-flex items-center gap-2'><img src={clock} alt="" />{recipe.preparing_time} minutes</p>
                        <p className='inline-flex items-center gap-2'><img src={fire} alt="" />{recipe.calories} calories</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleCook(recipe)} className="btn bg-[#0BE58A] rounded-full text-lg">Want to Cook</button>
                    </div>
                </div>
            </div>
        </>
    );
};

Recipes.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
};

export default Recipes;