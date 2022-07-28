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
        const displayHeader = new DisplayHeader();
        const displaySearchFilter = new DisplaySearchFilter();
        displayHeader.createHeader();
        displaySearchFilter.createSearchFilter();

        recipes.forEach((recipe) => {
            const displayRecipes = new DisplayRecipes(recipe);
            displayRecipes.createRecipe();

            recipe.ingredients.forEach((ingredient) => {
                this.allIngredients.push(ingredient.ingredient);
            });

            this.allApparels.push(recipe.appliance);
            this.allUstensils.push(...recipe.ustensils);
        });

        this.allIngredients = deleteDuplicateValue(this.allIngredients);
        this.allUstensils = deleteDuplicateValue(this.allUstensils);
        this.allApparels = deleteDuplicateValue(this.allApparels);

        this.allIngredients.forEach((ingredient) => {
            new DisplayDropdownIngredients(
                ingredient
            ).createSelectIngredients();
        });
        this.allApparels.forEach((apparel) =>
            new DisplayDropDownAppliances(apparel).createSelectAppliances()
        );
        this.allUstensils.forEach((ustensil) =>
            new DisplayDropdownUstensils(ustensil).createSelectUstensils()
        );

        // Creer des tableaux et bouclé avec factories
    }
}

export { View };
