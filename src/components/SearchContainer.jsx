import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import './SearchContainer.css';

const SearchContainer = ({ onSubmitOfSearch, searchErrorExists }) => (
    <div className="SearchContainer-container">
        <div className="SearchContainer-content">
            <h3>Search for Recipes</h3>
            <SearchForm onSubmit={onSubmitOfSearch} />
            {searchErrorExists ? <div className="SearchContainer-error">Oh no! We couldn't find any recipes for the ingredients you entered. Please try another search. </div> : null}
        </div>
    </div>
);

SearchContainer.propTypes = {
    onSubmitOfSearch: PropTypes.func.isRequired,
    searchErrorExists: PropTypes.bool.isRequired
};

export default SearchContainer;