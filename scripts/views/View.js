import { GetElementId } from '../utils/GetElement.js';
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
        this.allIngredients = [];
        this.allUstensils = [];
        this.allApparels = [];

        this.tag = new DisplayTags();
        new DisplaySearchFilter().createSearchFilter();
        this.tagsIngredients = [];
    }

    render({ recipes, tagIngredients }) {
        this.allIngredients = [];
        this.allUstensils = [];
        this.allApparels = [];
        GetElementId.labelRecipes().innerHTML = '';
        GetElementId.header().innerHTML = '';
        GetElementId.selectsInput().innerHTML = '';
        new DisplayHeader().createHeader();

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

        this.eventListener();
    }

    eventListener() {
        // Transmets les valeurs à mon observable
        GetElementId.searchBar().addEventListener('input', (e) => {
            // recupérer valeur input search bar
            const value = e.target.value;
            this.notify('searchBar', {
                value,
            });
        });

        GetElementId.ingredientsInput().addEventListener('click', () => {
            displayDropDown('ingredients');
            expandWidthDropDown('ingredients');
        });

        GetElementId.apparelsInput().addEventListener('click', () => {
            displayDropDown('apparels');
            expandWidthDropDown('apparels');
        });

        GetElementId.ustensilsInput().addEventListener('click', () => {
            displayDropDown('ustensils');
            expandWidthDropDown('ustensils');
        });

        // Create tags
        GetElementId.ingredientsDropdown().addEventListener('click', (e) => {
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

        GetElementId.apparelsDropdown().addEventListener('click', (e) => {
            const color = '#68D9A4';
            const apparel = e.target.dataset.title;
            this.tag.createTags(apparel, color);
        });

        GetElementId.ustensilsDropdown().addEventListener('click', (e) => {
            const color = '#ED6454';
            const ustensil = e.target.dataset.title;
            this.tag.createTags(ustensil, color);
        });
    }
}

export { View };
