import { createElementToCard } from '../utils/utils.js';
import { GetElementId } from '../utils/GetElementById.js';

class DisplayDropDownAppliances {
    constructor(apparel) {
        this.apparel = apparel;
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

        this.elLabelAppareils = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-apparels' },
        ]);

        this.elLabelAppareils.append(this.elApparel, this.elIconA);

        this.elDivApparels = createElementToCard('div', null, [
            { attribut: 'id', content: 'div-apparels' },
        ]);

        this.elUlApparels = createElementToCard('ul', null, [
            { attribut: 'id', content: 'apparels-dropdown' },
        ]);

        this.apparel.map((apparel) => {
            this.elLiApparels = createElementToCard('li', `${apparel}`, [
                { attribut: 'class', content: 'dropdown-apparels' },
                { attribut: 'title', content: `${apparel}` },
                { attribut: 'data-title', content: `${apparel}` },
                { attribut: 'id', content: `${apparel}` },
            ]);
            this.elUlApparels.appendChild(this.elLiApparels);
        });

        this.elDivApparels.append(this.elLabelAppareils, this.elUlApparels);

        GetElementId.dropdownsInput().appendChild(this.elDivApparels);
    }
}

export { DisplayDropDownAppliances };
