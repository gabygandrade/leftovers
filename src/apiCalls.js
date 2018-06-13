import { API_KEY, APP_ID } from './keys';

export const fetchRecipes = async (searchText) => {
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchText}&from=0&to=30`

    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    else {
        return await response.json();
    }
}