import Observable from '../utils/Observable.js';
import {
    DisplayHeader,
    DisplayRecipes,
    DisplaySearchFilter,
    DisplaySelects,
} from '../factories/factories.js';

class View extends Observable {
    constructor() {
        super();
    }

    render({ recipes }) {
        const displayHeader = new DisplayHeader();
        const displaySearchFilter = new DisplaySearchFilter();
        displayHeader.createHeader();
        displaySearchFilter.createSearchFilter();

        recipes.forEach((recipe) => {
            const displayRecipes = new DisplayRecipes(recipe);
            const displaySelects = new DisplaySelects(recipe);
            displayRecipes.createRecipe();
            displaySelects.createSelects();
        });
        // Creer des tableaux et bouclé avec factories
    }
}

export { View };
