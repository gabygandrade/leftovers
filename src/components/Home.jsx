import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import RecipeContainer from './RecipeContainer';
import { fetchRecipes } from '../apiCalls.js';

class Home extends Component {
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
        const recipeContainerProps = {
            recipes,
            showModal,
            selectedRecipe,
            onClickOfRecipe: this.handleShowModal,
            handleCloseModal: this.handleCloseModal
        };

        return (recipesWereFetched ? <RecipeContainer {...recipeContainerProps} /> : <SearchContainer onSubmitOfSearch={this.handleSearchRecipes} searchErrorExists={this.state.noSearchResults} />);
    }
};

export default Home;
