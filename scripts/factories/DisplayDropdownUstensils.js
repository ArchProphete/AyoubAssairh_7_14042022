import { createElementToCard, deleteDuplicateValue } from '../utils/utils.js';

class DisplayDropdownUstensils {
    ustensils = [];

    constructor(ustensil) {
        this.ustensils = ustensil;
    }
    createSelectUstensils() {
        // USTENSILES
        this.elUstensil = createElementToCard('input', null, [
            { attribut: 'id', content: 'ustensils-input' },
            { attribut: 'name', content: 'utensil' },
            { attribut: 'placeholder', content: 'Ustensiles' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes ustensiles` },
        ]);

        this.elIconU = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelUstensils = createElementToCard('label', null, []);

        this.elLabelUstensils.append(this.elUstensil, this.elIconU);

        this.elDivUstensils = createElementToCard('div', null, [
            { attribut: 'id', content: 'label-ustensils' },
        ]);

        this.elDivUstensils.append(this.elLabelUstensils, this.elUstensil);

        this.elUlUstensils = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ustensils-dropdown' },
        ]);

        this.elLiUstensil = createElementToCard('li', `${this.ustensils}`, [
            { attribut: 'class', content: 'dropdown-ustensils' },
            { attribut: 'title', content: `${this.ustensils}` },
            { attribut: 'data-title', content: `${this.ustensils}` },
        ]);
        this.elUlUstensils.appendChild(this.elLiUstensil);
    }
}

export { DisplayDropdownUstensils };
