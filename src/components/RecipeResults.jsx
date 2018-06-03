import React from 'react';
import PropTypes from 'prop-types';
import { dummyRecipes } from './dummyRecipes';
import './RecipeResults.css';

const RecipeResults = ({ recipes }) => {
    const formattedRecipes = recipes.map((recipeObj, index) => {
        const recipe = recipeObj.recipe;
        const id = `${recipe.label}-${index}`

        const recipeArray =
            <a className="RecipeResults-link" key={`${id}-link`}>
                <figure>
                    <img src={recipe.image} alt={recipe.label} className="RecipeResults-image" key={`${id}-img`} />
                    <figcaption className="RecipeResults-caption">
                        {recipe.label}
                    </figcaption>
                </figure>
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