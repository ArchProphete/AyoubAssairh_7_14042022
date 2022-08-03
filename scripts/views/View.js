import Observable from '../utils/Observable.js';
import {
    DisplayDropDownAppliances,
    DisplayDropdownIngredients,
    DisplayDropdownUstensils,
    DisplayHeader,
    DisplayRecipes,
    DisplaySearchFilter,
} from '../factories/factories.js';
import { deleteDuplicateValue } from '../utils/utils.js';

class View extends Observable {
    constructor() {
        super();
        this.allIngredients = [];
        this.allUstensils = [];
        this.allApparels = [];
    }

    render({ recipes }) {
        new DisplayHeader().createHeader();
        new DisplaySearchFilter().createSearchFilter();

        // Loop to fetch each data
        recipes.forEach((recipe) => {
            const displayRecipes = new DisplayRecipes(recipe);
            // Destructuring recipe
            const { appliance, ingredients, ustensils } = recipe;
            displayRecipes.createRecipe();
            // Push data in each arrays
            ingredients.forEach((ingredient) => {
                this.allIngredients.push(ingredient.ingredient);
            });
            this.allApparels.push(appliance);
            this.allUstensils.push(...ustensils);
        });

        // Delete duplicate data for clean arrays and stock it same arrays
        this.allIngredients = deleteDuplicateValue(this.allIngredients);
        this.allUstensils = deleteDuplicateValue(this.allUstensils);
        this.allApparels = deleteDuplicateValue(this.allApparels);

        // Transfer data lowerCased for each Dropdown factories
        new DisplayDropdownIngredients(
            this.allIngredients
        ).createSelectIngredients();

        new DisplayDropDownAppliances(
            this.allApparels
        ).createSelectAppliances();

        new DisplayDropdownUstensils(this.allUstensils).createSelectUstensils();
    }
}

export { View };
