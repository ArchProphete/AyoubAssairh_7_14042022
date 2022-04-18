import { DisplayHeader } from '../factories/DisplayHeader.js';
import { DisplaySearchFilter } from '../factories/DisplaySearchFilter.js';
import { DisplayTags } from '../factories/DisplayTags.js';
import { DisplaySelects } from '../factories/DisplaySelects.js';
import { DisplayRecipes } from '../factories/displayRecipes.js';

export class DisplayPage {
    constructor() {
        this.newHeader = new DisplayHeader();
        this.newSearchFilter = new DisplaySearchFilter();
        this.newTags = new DisplayTags();
        this.newSelects = new DisplaySelects();
        this.newRecipes = new DisplayRecipes();
    }

    display() {
        this.newHeader.createHeader();
        this.newSearchFilter.createSearchFilter();
        this.newTags.createTags();
        this.newSelects.createSelects();
        this.newRecipes.createRecipes(recipes);
    }
}
