import {
    createElementToCard,
    deleteDuplicateValue,
    deleteOverlayAndResizeSelect,
} from '../utils/utils.js';
import { Filter } from '../controllers/Filter.js';
import { DisplayTags } from './factories.js';

class DisplaySelects {
    tagsIngredients = [];
    tagsUstensils = [];
    tagsApparels = [];

    constructor() {
        this.tag = new DisplayTags();
        this.selectInput = document.getElementById('selects-input');
    }

    createSelects() {
        // TODO Faire en sorte de n'en créé qu'un
        //  et de le mettre en display none

        deleteOverlayAndResizeSelect(
            elOverlay,
            this.elUlIngredients,
            this.elUlApparels,
            this.elUlUstensils,
            this.elLabelIngredients,
            this.elLabelAppareil,
            this.elLabelUstensils
        );
        // Call filters functions
        this.filter = new Filter();
        this.filter.filterIngredients();
        this.filter.filterApparels();
        this.filter.filterUstensils();
    }
}

export { DisplaySelects };
