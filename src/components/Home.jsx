import React, { Component } from 'react';
import './Home.css'
import Search from './Search';
import RecipeResults from './RecipeResults';
import { API_KEY, APP_ID } from '../keys';
import RecipeModal from './Modal';

class Home extends Component {
    state = {
        recipes: [],
        showModal: false,
        selectedRecipe: {}
    }

    handleSearch = (e, searchText) => {
        e.preventDefault();

        const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchText}&from=0&to=30`
        fetch(url).then(response => {
            // throw error for failed HTTP responses, since fetch API only rejects a promise if there is network error
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(data => this.setState({ recipes: data.hits }))
            .catch(error => console.error('Fetch failed with error:', error))
    }

    handleModalShow = (recipe) => {
        this.setState({
            showModal: true,
            selectedRecipe: recipe
        })
    };

    handleModalClose = () => this.setState({ showModal: false })

    render() {
        const { recipes, selectedRecipe, handleModalShow, handleModalClose } = this.state;

        const searchContent = (<div className="Home-container">
            <div className="Home-content">
                <h3>Search for Recipes</h3>
                <Search onSearch={this.handleSearch} />
            </div>
        </div>
        )

        const recipeContent = (<div>
            <RecipeResults recipes={this.state.recipes} onClickOfRecipe={this.handleModalShow} />
            {this.state.showModal ? <RecipeModal recipe={this.state.selectedRecipe} show={this.state.showModal} handleClose={this.handleModalClose} /> : null}
        </div>)

        return (recipes.length > 0 ? recipeContent : searchContent);
    }
};

export default Home;
