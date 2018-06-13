import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import './SearchContent.css';

const SearchContent = ({ onSubmitOfSearch, searchErrorExists }) => (
    <div className="SearchContainer-container">
        <div className="SearchContainer-content">
            <h3>Search for Recipes</h3>
            <SearchForm onSubmit={onSubmitOfSearch} />
            {searchErrorExists && <div className="SearchContainer-error">Oh no! We couldn't find any recipes for the ingredients you entered. Please try another search. </div>}
        </div>
    </div>
);

SearchContent.propTypes = {
    onSubmitOfSearch: PropTypes.func.isRequired,
    searchErrorExists: PropTypes.bool.isRequired
};

export default SearchContent;