import { displayHeader } from '../factories/displayHeader.js';
import { displaySearchFilter } from '../factories/displaySearchFilter.js';
import { displayTags } from '../factories/displayTags.js';
import { displaySelects } from '../factories/displaySelects.js';
import { displayRecipes } from '../factories/displayRecipes.js';

export const displayPage = (recipes) => {
    displayHeader();
    displaySearchFilter();
    displayTags();
    displaySelects();
    recipes.map((recipe) => displayRecipes(recipe));
};
