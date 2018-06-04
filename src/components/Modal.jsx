import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const RecipeModal = (props) => {
    const { show, handleClose, recipe } = props;

    const ingredients = recipe.ingredientLines.map((ingredient, i) => {
        return <li key={`ingredient-${i}`} >{ingredient}</li>
    });

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{recipe.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Ingredients</h4>
                <ul>
                    {ingredients}
                </ul>
                <p style={{ "textAlign": "center" }}><Button href={recipe.url} bsStyle="success"> View Full Recipe</Button></p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

RecipeModal.propTypes = {
    show: PropTypes.bool.isRequired,
    recipe: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default RecipeModal;