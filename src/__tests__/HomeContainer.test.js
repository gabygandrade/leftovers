import React from 'react';
import { shallow, mount } from 'enzyme';
import HomeContainer from '../components/HomeContainer';

describe('Home component', () => {
    let home;
    let mockRecipes;

    beforeEach(() => {
        home = shallow(<HomeContainer />);

        mockRecipes = [
            {
                "label": "Grilled Shrimp",
                "image": "https://www.edamam.com/web-img/9b9/9b998718333719366eee79249816e630.jpg",
                "ingredientLines": ["1 lb. jumbo shell-on shrimp (16 to 20 per lb.), preferably deveined", "Kosher salt", "2 Tbs. olive oil"]
            },
            {
                "label": "Grilled Prosciutto-Wrapped Shrimp",
                "image": "https://www.edamam.com/web-img/78d/78d16a532eae13400a77cc0049f3a12e.jpg",
                "ingredientLines": ["Shrimp 24 x shrimp", "6 x prosciutto"]
            }
        ];

    })

    it('renders the SearchContent component when it is first mounted', () => {
        expect(home.find('SearchContent').exists()).toBe(true);
    })

    it('renders the RecipeResults component when there are recipes in its state', () => {
        home.setState({ recipes: mockRecipes });
        expect(home.find('RecipeResults').exists()).toBe(true);
    });
})