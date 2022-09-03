import { createElementToCard } from '../utils/utils.js';
import { GetElementId } from '../utils/GetElementById.js';

class DisplaySearchFilter {
    constructor() {}

    createSearchFilter() {
        this.elInput = createElementToCard('input', null, [
            { attribut: 'id', content: 'search-filter' },
            { attribut: 'type', content: 'text' },
            { attribut: 'placeholder', content: 'Rechercher une recette' },
            { attribut: 'tabindex', content: '2' },
            { attribut: 'aria-label', content: `Recherchez votre recette` },
        ]);

        this.elIcon = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-magnifying-glass' },
        ]);

        this.elLabel = createElementToCard('label', null, null);

        this.elLabel.append(this.elInput, this.elIcon);
        GetElementId.searchBar().appendChild(this.elLabel);
    }
}

export { DisplaySearchFilter };
