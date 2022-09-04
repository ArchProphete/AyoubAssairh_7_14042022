class GetElementId {
    constructor() {}

    static searchBar() {
        return document.getElementById('search-filter');
    }

    static header() {
        return document.getElementById('header');
    }

    static dropdownsInput() {
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
    static divIngredients() {
        return document.getElementById('div-ingredients');
    }

    static divApparels() {
        return document.getElementById('div-apparels');
    }

    static divUstensils() {
        return document.getElementById('div-ustensils');
    }

    // TAG BUTTON
    static tagButton() {
        return document.getElementById('tag-button');
    }
}

export { GetElementId };
