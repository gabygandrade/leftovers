import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './CustomNavbar.css'

const CustomNavbar = props => {
    return (
        <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Leftovers </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
    );
};

CustomNavbar.propTypes = {

};

export default CustomNavbar;