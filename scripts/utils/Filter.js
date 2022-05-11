import { filterInput } from './utils.js';

export class Filter {
    constructor() {
        this.mainSearchInput = document.getElementById('search-filter');
        this.ingredientSearchInput =
            document.getElementById('ingredients-input');
        this.apparelsSearchInput = document.getElementById('apparels-input');
        this.ustensilsSearchInput = document.getElementById('ustensils-input');
    }

    // Filtre les recettes selon ce que l'utilisateur rentre dans le champ principal
    getRecipes() {
        this.mainSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.searchResult = document.querySelectorAll('.search-result');
            filterInput(this.searchLetters, this.searchResult);
        });
    }

    // Filtre les dropdowns 'Ingrédient' selon ce que l'utilisateur rentre dans le champ input Ingrédient
    filterIngredients() {
        this.ingredientSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.ingredientsResult = document.querySelectorAll(
                '.dropdown-ingredients'
            );
            filterInput(this.searchLetters, this.ingredientsResult);
        });
    }

    // Filtre les dropdowns 'appareils' selon ce que l'utilisateur rentre dans le champ input appareils
    filterApparels() {
        this.apparelsSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.apparelsResult =
                document.querySelectorAll('.dropdown-apparels');
            filterInput(this.searchLetters, this.apparelsResult);
        });
    }

    // Filtre les dropdowns 'ustensils' selon ce que l'utilisateur rentre dans le champ input ustensils
    filterUstensils() {
        this.ustensilsSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.ustensilsResult = document.querySelectorAll(
                '.dropdown-ustensils'
            );
            filterInput(this.searchLetters, this.ustensilsResult);
        });
    }
}
