import { GetElementById } from '../utils/GetElementById.js';
import Observable from '../utils/Observable.js';
import {
    DisplayDropDownAppliances,
    DisplayDropdownIngredients,
    DisplayDropdownUstensils,
    DisplayHeader,
    DisplayRecipes,
    DisplaySearchFilter,
    DisplayTags,
} from '../factories/factories.js';
import {
    deleteDuplicateValue,
    displayDropDown,
    expandWidthDropDown,
} from '../utils/utils.js';

class View extends Observable {
    constructor() {
        super();

        this.tag = new DisplayTags();
        this.tagsIngredients = [];

        new DisplaySearchFilter().createSearchFilter();
    }

    render({ recipes }) {
        this.allIngredients = [];
        this.allUstensils = [];
        this.allApparels = [];

        GetElementById.header().innerHTML = '';
        GetElementById.labelRecipes().innerHTML = '';

        new DisplayHeader().createHeader();

        // Loop to fetch each data
        recipes.forEach((recipe) => {
            new DisplayRecipes(recipe).createRecipe();
            // Destructuring recipe
            const { appliance, ingredients, ustensils } = recipe;
            // Push data in each arrays
            ingredients.forEach((ingredient) => {
                this.allIngredients.push(ingredient.ingredient);
            });
            this.allApparels.push(appliance);
            this.allUstensils.push(...ustensils);
        });

        // Transfer data for each Dropdown factories
        new DisplayDropdownIngredients(
            deleteDuplicateValue(this.allIngredients)
        ).createSelectIngredients();

        new DisplayDropDownAppliances(
            deleteDuplicateValue(this.allUstensils)
        ).createSelectAppliances();

        new DisplayDropdownUstensils(
            deleteDuplicateValue(this.allApparels)
        ).createSelectUstensils();

        this.eventListener();
    }

    eventListener() {
        // Transmets les valeurs à mon observable
        GetElementById.searchBar().addEventListener('input', (e) => {
            // recupérer valeur input search bar
            this.notify('searchBar', {
                value: e.target.value,
            });
        });

        GetElementById.ingredientsInput().addEventListener('click', () => {
            displayDropDown('ingredients');
            expandWidthDropDown('ingredients');
        });

        GetElementById.apparelsInput().addEventListener('click', () => {
            displayDropDown('apparels');
            expandWidthDropDown('apparels');
        });

        GetElementById.ustensilsInput().addEventListener('click', () => {
            displayDropDown('ustensils');
            expandWidthDropDown('ustensils');
        });

        // Create tags
        GetElementById.ingredientsDropdown().addEventListener('click', (e) => {
            const color = '#3381F7';
            const ingredient = e.target.dataset.title;
            this.tag.createTags(ingredient, color);
            // Récupère le titre et le pousse dans un tableau
            this.tagsIngredients.push(ingredient);
            // Retire du tableau global l'élément séléctionné
            this.uniqIngredient = this.uniqIngredient.filter(
                (el) => !this.tagsIngredients.includes(el)
            );
        });

        GetElementById.apparelsDropdown().addEventListener('click', (e) => {
            const color = '#68D9A4';
            const apparel = e.target.dataset.title;
            this.tag.createTags(apparel, color);
        });

        GetElementById.ustensilsDropdown().addEventListener('click', (e) => {
            const color = '#ED6454';
            const ustensil = e.target.dataset.title;
            this.tag.createTags(ustensil, color);
        });
    }
}

export { View };
