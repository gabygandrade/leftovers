import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class SearchForm extends Component {
    state = { value: '' };

    handleChange = e => this.setState({ value: e.target.value });

    render() {
        return (
            <div className="RecipeSearch">
                <Form inline onSubmit={e => this.props.onSubmit(e, this.state.value)} >
                    <FormGroup controlId="formInlineName">
                        <ControlLabel style={{ marginRight: "5px" }}>I have...</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="arugula, strawberries"
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

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;