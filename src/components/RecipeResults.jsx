import React from 'react';
import PropTypes from 'prop-types';
import { dummyRecipes } from './dummyRecipes';
import './RecipeResults.css';

const RecipeResults = (props) => {
    const { recipes } = props;

    const formattedRecipes = recipes.map((recipeObj, index) => {
        const recipe = recipeObj.recipe;
        const id = `${recipe.label}-${index}`

        const recipeArray =
            <div className="RecipeResults-link" key={`${id}-link`} onClick={() => props.onClickOfRecipe(recipe)}>
                <figure className="RecipeResults-figure">
                    <img src={recipe.image} alt={recipe.label} className="RecipeResults-image" key={`${id}-img`} />
                    <figcaption className="RecipeResults-caption">
                        <div className="RecipeResults-name">{recipe.label}</div>
                        <div>{recipe.ingredientLines.length} Ingredients</div>
                        <div>{recipe.dietLabels.join(' | ')}</div>
                    </figcaption>
                </figure>
            </div>

        return recipeArray;
    })

    return (
        <div className="RecipeResults-container">
            {formattedRecipes}
        </div>
    );
};

RecipeResults.propTypes = {
    recipes: PropTypes.array.isRequired,
    onClickOfRecipe: PropTypes.func.isRequired
};

export default RecipeResults;