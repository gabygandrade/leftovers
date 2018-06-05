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
            .then(data => {
                if (data.hits.length > 0) this.setState({ recipes: data.hits })
                else this.setState({ recipes: null })
            })
            .catch(error => console.error('Fetch failed with error:', error))
    }

    handleModalShow = (recipe) => {
        this.setState({
            showModal: true,
            selectedRecipe: recipe
        })
    };

    handleModalClose = () => this.setState({ showModal: false });

    getRecipeContent = () => {
        return (<div>
            <RecipeResults recipes={this.state.recipes} onClickOfRecipe={this.handleModalShow} />
            {this.state.showModal ? <RecipeModal recipe={this.state.selectedRecipe} show={this.state.showModal} handleClose={this.handleModalClose} /> : null}
        </div>)
    }

    getSearchContent = () => {
        return (<div className="Home-container">
            <div className="Home-content">
                <h3>Search for Recipes</h3>
                <Search onSearch={this.handleSearch} />
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
