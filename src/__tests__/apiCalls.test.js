import { fetchRecipes } from '../apiCalls';

describe('fetchRecipes', () => {
    const objectToReturnOnResolve = {
        data: {
            hits: [
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
            ]
        }
    }
    const searchText = 'shrimp';

    it('returns an object if status code is ok', () => {
        window.fetch = jest.fn().mockImplementation(() => ({
            ok: true,
            json: () => new Promise(resolve => {
                resolve(objectToReturnOnResolve)
            }),
        }))

        expect(fetchRecipes(searchText)).resolves.toEqual(objectToReturnOnResolve)
    })

    it('throws an error if status code is not ok', () => {
        const error = 'Internal Server Error';

        window.fetch = jest.fn().mockImplementation(() => ({
            ok: false,
            statusText: error
        }))

        expect(fetchRecipes(searchText)).rejects.toEqual(new Error(error))
    })
})