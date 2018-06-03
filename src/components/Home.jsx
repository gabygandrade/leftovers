import React, { Component } from 'react';
import './Home.css'
import Search from './Search';
import RecipeResults from './RecipeResults';
import { API_KEY, APP_ID } from '../keys';

class Home extends Component {
    state = {
        recipes: []
    }

    handleSearch = (e, searchText) => {
        e.preventDefault();
        const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchText}&from=0&to=30`
        fetch(url).then(res => res.json()).then(data => {
            this.setState({ recipes: data.hits });
        });
        // TODO: add error handling - when there are zero results 
    }

    render() {
        const { recipes } = this.state;

        const searchContent = (
            <div className="Home-container">
                <div className="Home-content">
                    <h3>Search for Recipes</h3>
                    <Search onSearch={this.handleSearch} />
                </div>
            </div>
        )

        return (recipes.length > 0 ? <RecipeResults recipes={recipes} /> : searchContent);
        // return <RecipeResults recipes={recipes} />;
    }
};

export default Home;
