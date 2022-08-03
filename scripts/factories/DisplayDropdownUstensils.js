import { createElementToCard } from '../utils/utils.js';

class DisplayDropdownUstensils {
    constructor(ustensil) {
        this.ustensils = ustensil;
        this.selectInput = document.getElementById('selects-input');
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

        this.ustensils.map((ustensil) => {
            this.elLiUstensil = createElementToCard('li', `${ustensil}`, [
                { attribut: 'class', content: 'dropdown-ustensils' },
                { attribut: 'title', content: `${ustensil}` },
                { attribut: 'data-title', content: `${ustensil}` },
            ]);
            this.elUlUstensils.appendChild(this.elLiUstensil);
        });

        this.elDivUstensils.append(this.elLabelUstensils, this.elUlUstensils);

        this.selectInput.appendChild(this.elDivUstensils);
    }
}
export { DisplayDropdownUstensils };
