import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RecipeResults from './RecipeResults';
import RecipeModal from './RecipeModal';
import { API_KEY, APP_ID } from '../keys';
import './Home.css'

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

    getRecipeContent = () => {
        const { recipes, showModal, selectedRecipe } = this.state;

        return (<div>
            <RecipeResults recipes={recipes} onClickOfRecipe={this.handleShowModal} />
            {showModal ? <RecipeModal recipe={selectedRecipe} show={showModal} handleClose={this.handleCloseModal} /> : null}
        </div>)
    }

    getSearchContent = () => {
        return (<div className="Home-container">
            <div className="Home-content">
                <h3>Search for Recipes</h3>
                <SearchForm onSubmit={this.handleSearchRecipes} />
                {this.state.recipes === null ? <div className="Home-searchError">Oh no! We couldn't find any recipes for the ingredients you entered. Please try another search. </div> : null}
            </div>
        </div>
        )
    }

    render() {
        const { recipes } = this.state;
        const recipesWereFetched = Array.isArray(recipes) && recipes.length > 0;

        return (recipesWereFetched ? this.getRecipeContent() : this.getSearchContent());
    }
};

export default Home;
