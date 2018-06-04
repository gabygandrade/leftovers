import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './CustomNavbar.css'

const CustomNavbar = () => (
    <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Leftovers</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    </Navbar>
);

export default CustomNavbar;