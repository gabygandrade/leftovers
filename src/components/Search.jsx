import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class Search extends Component {
    state = { value: '' }

    handleChange = (e) => this.setState({ value: e.target.value });

    render() {
        return (
            <div className="RecipeSearch">
                <Form inline onSubmit={e => this.props.onSearch(e, this.state.value)} >
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>I have...</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="ex. mushrooms, spinach, garlic"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Search</Button>
                </Form>
            </div >
        );
    }
};

export default Search;

// TODO: figure out why I cant use proptypes in this component
