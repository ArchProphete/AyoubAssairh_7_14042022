import { createElementToCard } from '../utils/utils.js';
import { GetElementById } from '../utils/GetElementById.js';

class DisplayDropDownAppliances {
    constructor(apparel) {
        this.apparel = apparel;
        this.apparelsFiltrered = [];
    }

    createSelectAppliances() {
        GetElementById.labelApparels().remove();
        GetElementById.apparelsDropdown().remove();
        // APPAREILS
        this.elApparel = createElementToCard('input', null, [
            { attribut: 'id', content: 'apparels-input' },
            { attribut: 'name', content: 'apparel' },
            { attribut: 'placeholder', content: 'Appareils' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes appareils` },
        ]);

        this.elIconA = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelApparels = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-apparels' },
        ]);

        this.elLabelApparels.append(this.elApparel, this.elIconA);

        this.elUlApparelsDropdown = createElementToCard('ul', null, [
            { attribut: 'id', content: 'apparels-dropdown' },
        ]);

        this.apparel.map((apparel) => {
            this.elLiApparels = createElementToCard('li', `${apparel}`, [
                { attribut: 'class', content: 'dropdown-apparels' },
                { attribut: 'title', content: `${apparel}` },
                { attribut: 'data-title', content: `${apparel}` },
                { attribut: 'id', content: `${apparel}` },
            ]);
            this.elUlApparelsDropdown.appendChild(this.elLiApparels);
        });

        GetElementById.divApparels().append(
            this.elLabelApparels,
            this.elUlApparelsDropdown
        );

        GetElementById.selectsInput().appendChild(GetElementById.divApparels());

        this.elApparel.addEventListener('input', (e) => {
            const value = e.target.value;

            this.apparel.forEach((apparel) => {
                if (apparel.toLowerCase().includes(value)) {
                    document.getElementById(apparel).style.display = 'block';
                    this.apparelsFiltrered.push(apparel);
                } else {
                    document.getElementById(apparel).style.display = 'none';
                    this.apparelsFiltrered.splice(apparel);
                }
            });
            console.log(this.apparelsFiltrered);
        });
    }
}

export { DisplayDropDownAppliances };
