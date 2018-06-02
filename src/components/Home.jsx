import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'
import Search from './Search';
import RecipeResults from './RecipeResults';

const API_KEY = '2b25daa46cf309490fc8c24b32ec1324';

class Home extends Component {
    state = { recipes: [] }

    handleSearch = (e, searchText) => {
        e.preventDefault();
        // TODO: clean up bad input from user
        const url = `http://food2fork.com/api/search?key=${API_KEY}&q=${searchText}`
        console.log('url: ', url);
        fetch(url).then(res => res.json()).then(data => {
            this.setState({ recipes: data.recipes });
        }
        );
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

Home.propTypes = {

};

export default Home;
