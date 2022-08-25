class GetElementId {
    constructor() {}

    static searchBar() {
        return document.getElementById('search-filter');
    }

    static header() {
        return document.getElementById('header');
    }

    static selectsInput() {
        return document.getElementById('selects-input');
    }

    static labelRecipes() {
        return document.getElementById('label-recipes');
    }

    // INPUTS
    static ingredientsInput() {
        return document.getElementById('ingredients-input');
    }

    static apparelsInput() {
        return document.getElementById('apparels-input');
    }

    static ustensilsInput() {
        return document.getElementById('ustensils-input');
    }

    // DROPDOWNS
    static ingredientsDropdown() {
        return document.getElementById('ingredients-dropdown');
    }

    static apparelsDropdown() {
        return document.getElementById('apparels-dropdown');
    }

    static ustensilsDropdown() {
        return document.getElementById('ustensils-dropdown');
    }

    // LABELS
    static labelIngredients() {
        return document.getElementById('label-ingredients');
    }

    static labelApparels() {
        return document.getElementById('label-apparels');
    }

    static labelUstensils() {
        return document.getElementById('label-ustensils');
    }
}

export { GetElementId };
