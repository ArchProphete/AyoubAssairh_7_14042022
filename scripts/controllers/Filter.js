import { filterInput } from '../utils/utils.js';

class Filter {
    constructor() {
        this.mainInput = document.getElementById('search-filter');
        this.ingredientSearchInput =
            document.getElementById('ingredients-input');
        this.apparelsSearchInput = document.getElementById('apparels-input');
        this.ustensilsSearchInput = document.getElementById('ustensils-input');
    }

    // Filtre les recettes selon ce que l'utilisateur rentre dans le champ principal
    getRecipes() {
        this.mainInput.addEventListener('keyup', (e) => {
            // Récupère les articles recette
            this.recipesArticles = document.querySelectorAll('.recipe-article');
            // Récupère les touches
            this.searchKeys = e.target.value;
            // Boucle sur les articles
            // Compare chaque élément
            if (this.searchKeys.length > 2) {
                this.recipesArticles.forEach((element) => {
                    if (
                        element.textContent
                            .toLowerCase()
                            .includes(this.searchKeys)
                    ) {
                        // Travailler avec les tableaux plutot que le css
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'none';
                    }
                });
            } else {
            }
        });
    }

    // Filtre les dropdowns 'Ingrédient' selon ce que l'utilisateur rentre dans le champ input Ingrédient
    filterIngredients() {
        this.ingredientSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.ingredientsResult = document.querySelectorAll(
                '.dropdown-ingredients'
            );
            if (this.searchLetters.length > 2) {
                this.ingredientsResult.forEach((element) => {
                    if (
                        element.textContent
                            .toLowerCase()
                            .includes(this.searchLetters)
                    ) {
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'none';
                    }
                });
            }
        });
    }

    // Filtre les dropdowns 'appareils' selon ce que l'utilisateur rentre dans le champ input appareils
    filterApparels() {
        this.apparelsSearchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.apparelsResult =
                document.querySelectorAll('.dropdown-apparels');
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

export { Filter };
