import { DisplayHeader } from '../factories/DisplayHeader.js';
import { DisplaySearchFilter } from '../factories/DisplaySearchFilter.js';
import { DisplayTags } from '../factories/DisplayTags.js';
import { DisplaySelects } from '../factories/DisplaySelects.js';
import { DisplayRecipes } from '../factories/displayRecipes.js';

export class DisplayPage {
    constructor() {}

    display() {
        new DisplayHeader().createHeader();
        new DisplaySearchFilter().createSearchFilter();
        new DisplayTags().createTags();
        new DisplaySelects().createSelects();
        new DisplayRecipes().createRecipes();
    }
}
