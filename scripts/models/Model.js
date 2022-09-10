import Observable from '../utils/Observable.js';

class Model extends Observable {
    constructor() {
        super();
        this.recipes = [];
        this.filteredRecipes = [];
        // TODO Rajouter et gerer les tags
    }

    // TODO methode ajouter un tag
    setRecipes(recipes) {
        this.recipes = recipes;
        this.updateFilteredRecipes();
    }

    updateFilteredRecipes() {
        this.filteredRecipes = [];

        this.recipes.forEach((recipe) => {
            this.filteredRecipes.push(recipe);
        });

        this.notifyChange();
    }

    searchFilter(value) {
        this.filteredRecipes = [];
        if (value.length > 2) {
            this.recipes.forEach((recipe) => {
                const { name, description, ingredients } = recipe;

                if (
                    name.toLowerCase().includes(value) ||
                    description.toLowerCase().includes(value) ||
                    ingredients.forEach((ingredient) =>
                        ingredient.ingredient.toLowerCase().includes(value)
                    )
                ) {
                    this.filteredRecipes.push(recipe);
                }
            });
            this.notifyChange();
        }
    }
    /*
    searchIngredients(value, allIngredients) {
        this.filteredIngredientsDropdown = [];

        allIngredients.forEach((ingredient) => {
            if (ingredient.toLowerCase().includes(value)) {
                this.filteredIngredientsDropdown.push(ingredient);
            }
        });
        this.notifyChange();
    }
*/
    notifyChange() {
        this.notify('change', {
            recipes: this.filteredRecipes,
        });
    }
}

export { Model };
