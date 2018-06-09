import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const RecipeModal = ({ recipe: { ingredientLines, label, url }, show, handleClose }) => {
    const ingredients = ingredientLines.map((ingredient, i) => {
        return <li key={`ingredient-${i}`} >{ingredient}</li>
    });

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Ingredients</h4>
                <ul>
                    {ingredients}
                </ul>
                <p style={{ "textAlign": "center" }}><Button href={url} bsStyle="success" target="_blank"> View Full Recipe</Button></p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

RecipeModal.propTypes = {
    recipe: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default RecipeModal;