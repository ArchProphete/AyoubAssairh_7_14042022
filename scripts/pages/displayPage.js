import { displayHeader } from '../factories/displayHeader.js';
import { displaySearchFilter } from '../factories/displaySearchFilter.js';
import { displayTags } from '../factories/displayTags.js';
import { displaySelectsGroup } from '../factories/displaySelectsGroup.js';
import { displayRecipesGroup } from '../factories/displayRecipesGroup.js';

export const displayPage = () => {
    displayHeader();
    displaySearchFilter();
    displayTags();
    displaySelectsGroup();
    displayRecipesGroup();
};
