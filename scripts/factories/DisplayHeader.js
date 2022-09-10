import { createElementToCard } from '../utils/utils.js';
import { GetElementById } from '../utils/GetElementById.js';

class DisplayHeader {
    constructor() {}

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
        GetElementById.header().append(this.elA);
    }
}

export { DisplayHeader };
