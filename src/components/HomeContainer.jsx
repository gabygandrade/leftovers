import React, { Component } from 'react';
import SearchContent from './SearchContent';
import RecipeResults from './RecipeResults';
import { fetchRecipes } from '../apiCalls.js';

class HomeContainer extends Component {
    state = {
        recipes: [],
        showModal: false,
        selectedRecipe: {},
        noSearchResults: false,
    };

    handleSearchRecipes = async (e, searchText) => {
        e.preventDefault();

        try {
            const data = await fetchRecipes(searchText);
            if (data.hits.length > 0) this.setState({ recipes: data.hits })
            else this.setState({ noSearchResults: true })
        } catch (error) {
            console.error('Fetch failed with error:', error)
        }
    }

    handleShowModal = recipe => {
        this.setState({
            showModal: true,
            selectedRecipe: recipe
        })
    };

    handleCloseModal = () => this.setState({ showModal: false });

    render() {
        const { recipes, showModal, selectedRecipe } = this.state;
        const recipesWereFetched = Array.isArray(recipes) && recipes.length > 0;
        const recipeResultsProps = {
            recipes,
            showModal,
            selectedRecipe,
            onClickOfRecipe: this.handleShowModal,
            handleCloseModal: this.handleCloseModal
        };

        return (recipesWereFetched ? <RecipeResults {...recipeResultsProps} /> : <SearchContent onSubmitOfSearch={this.handleSearchRecipes} searchErrorExists={this.state.noSearchResults} />);
    }
};

export default HomeContainer;
