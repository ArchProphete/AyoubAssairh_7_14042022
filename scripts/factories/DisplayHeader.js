import { createElementToCard } from '../utils/utils.js';

export class DisplayHeader {
    constructor() {
        this.header = document.getElementById('header');
    }

    createHeader() {
        this.elLogo = createElementToCard('img', null, [
            { attribut: 'src', content: 'assets/images/logo.png' },
            { attribut: 'id', content: 'logo' },
            { attribut: 'alt', content: 'Les petits plats' },
            { attribut: 'tabindex', content: '1' },
            { attribut: 'aria-label', content: `Logo de Les petits plats` },
        ]);

        this.elA = createElementToCard('a', null, [
            { attribut: 'href', content: '' },
        ]);

        this.elA.appendChild(this.elLogo);
        this.header.append(this.elA);
    }
}
