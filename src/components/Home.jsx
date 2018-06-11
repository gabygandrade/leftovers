import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import RecipeContainer from './RecipeContainer';
import { API_KEY, APP_ID } from '../keys';

class Home extends Component {
    state = {
        recipes: [],
        showModal: false,
        selectedRecipe: {}
    }

    handleSearchRecipes = (e, searchText) => {
        e.preventDefault();

        const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchText}&from=0&to=30`
        fetch(url).then(response => {
            // throw error for failed HTTP responses, since fetch API only rejects a promise if there is network error
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(data => {
                if (data.hits.length > 0) this.setState({ recipes: data.hits })
                else this.setState({ recipes: null })
            })
            .catch(error => console.error('Fetch failed with error:', error))
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

        return (recipesWereFetched ? <RecipeContainer {...recipeContainerProps} /> : <SearchContainer onSubmitOfSearch={this.handleSearchRecipes} searchErrorExists={this.state.recipes === null} />);
    }
};

export default Home;
