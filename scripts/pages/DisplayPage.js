import { DisplayHeader } from '../factories/DisplayHeader.js';
import { DisplaySearchFilter } from '../factories/DisplaySearchFilter.js';
import { DisplaySelects } from '../factories/DisplaySelects.js';
import { DisplayRecipes } from '../factories/DisplayRecipes.js';
import { Filter } from '../utils/Filter.js';

export class DisplayPage {
    constructor(recipes) {
        this.recipes = recipes;
        new Filter().getRecipes();
    }

    display() {
        const [
            displayHeader,
            displaySearchFilter,
            displaySelects,
            displayRecipes,
        ] = [
            new DisplayHeader(),
            new DisplaySearchFilter(),
            new DisplaySelects(this.recipes),
            new DisplayRecipes(this.recipes),
        ];

        displayHeader.createHeader();
        displaySearchFilter.createSearchFilter();
        displaySelects.createSelects();
        displayRecipes.createRecipes();
    }
}
