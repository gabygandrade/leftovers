import React from 'react';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';
import PropTypes from 'prop-types';
import './RecipeContainer.css';

const RecipeContainer = ({ recipes, showModal, selectedRecipe, onClickOfRecipe, handleCloseModal }) => {
    const formattedRecipes = recipes.map((recipeObj, index) => {
        const recipe = recipeObj.recipe;
        const id = `${recipe.label}-${index}`

        return <RecipeCard key={`${id}-recipeCardContainer`} id={id} recipe={recipe} onClickOfRecipe={onClickOfRecipe} />
    });
    const noRecipesContent = <div>No recipes to display</div>;

    return (
        <div className="RecipeContainer-container">
            {recipes.length > 0 ? formattedRecipes : noRecipesContent}
            {showModal ? <RecipeModal recipe={selectedRecipe} show={showModal} handleClose={handleCloseModal} /> : null}
        </div>
    );
};

RecipeContainer.propTypes = {
    recipes: PropTypes.array.isRequired,
    onClickOfRecipe: PropTypes.func.isRequired
};

export default RecipeContainer;