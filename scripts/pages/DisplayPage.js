import { DisplayHeader } from '../factories/DisplayHeader.js';
import { DisplaySearchFilter } from '../factories/DisplaySearchFilter.js';
import { DisplayTags } from '../factories/DisplayTags.js';
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
            displayTags,
            displaySelects,
            displayRecipes,
        ] = [
            new DisplayHeader(),
            new DisplaySearchFilter(),
            new DisplayTags(),
            new DisplaySelects(),
            new DisplayRecipes(this.recipes),
        ];

        displayHeader.createHeader();
        displaySearchFilter.createSearchFilter();
        displayTags.createTags();
        displaySelects.createSelects();
        displayRecipes.createRecipes();
    }
}
