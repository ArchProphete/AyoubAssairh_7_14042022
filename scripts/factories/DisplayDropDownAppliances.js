import { createElementToCard, deleteDuplicateValue } from '../utils/utils.js';

class DisplayDropDownAppliances {
    constructor(apparel) {
        this.apparel = apparel;
        this.selectInput = document.getElementById('selects-input');
    }

    createSelectAppliances() {
        // APPAREILS
        this.elApparel = createElementToCard('input', null, [
            { attribut: 'id', content: 'apparels-input' },
            { attribut: 'name', content: 'apparel' },
            { attribut: 'placeholder', content: 'Appareils' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes appareils` },
        ]);

        this.elIconA = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelAppareil = createElementToCard('label', null, null);

        this.elLabelAppareil.append(this.elApparel, this.elIconA);

        this.elDivApparels = createElementToCard('div', null, [
            { attribut: 'id', content: 'label-apparels' },
        ]);

        this.elDivApparels.append(this.elLabelAppareil, this.elApparel);

        this.elUlApparels = createElementToCard('ul', null, [
            { attribut: 'id', content: 'apparels-dropdown' },
        ]);

        this.apparel.map((apparel) => {
            this.elLiApparels = createElementToCard('li', `${apparel}`, [
                { attribut: 'class', content: 'dropdown-apparels' },
                { attribut: 'title', content: `${apparel}` },
                { attribut: 'data-title', content: `${apparel}` },
            ]);
            this.elUlApparels.appendChild(this.elLiApparels);
        });

        this.elDivApparels.append(this.elLabelAppareil, this.elUlApparels);

        this.selectInput.appendChild(this.elDivApparels);
    }
}

export { DisplayDropDownAppliances };
