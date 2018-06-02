import React from 'react';
import PropTypes from 'prop-types';
import { dummyRecipes } from './dummyRecipes';
import './RecipeResults.css';

const RecipeResults = ({ recipes }) => {
    const formattedRecipes = recipes.map(recipe => {
        const id = recipe.recipe_id;

        const recipeArray = <a key={`${id}-aTag`} href={recipe.publisher_url}>
            <div className="RecipeResults-imageContainer">
                <img src={recipe.image_url} alt={recipe.title} className="RecipeResults-image" key={`${id}-img`} />
                <span className="RecipeResults-title">{recipe.title}</span>
            </div >
        </a>

        return recipeArray;
    })

    return (
        <div className="RecipeResults-container">
            {formattedRecipes}
        </div>
    );
};

RecipeResults.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default RecipeResults;