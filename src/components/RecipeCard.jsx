import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = ({ id, recipe, onClickOfRecipe }) => {
    const { image, label, ingredientLines } = recipe;

    return (
        <div className="RecipeCard-container" key={`${id}-link`} onClick={() => onClickOfRecipe(recipe)}>
            <figure className="RecipeCard-figure">
                <img src={image} alt={label} className="RecipeCard-image" key={`${id}-img`} />
                <figcaption className="RecipeCard-caption">
                    <div className="RecipeCard-name">{label}</div>
                    <div>{ingredientLines.length} Ingredients</div>
                </figcaption>
            </figure>
        </div>
    );
};

RecipeCard.propTypes = {
    id: PropTypes.string.isRequired,
    recipe: PropTypes.object.isRequired,
    onClickOfRecipe: PropTypes.func.isRequired
}

export default RecipeCard;