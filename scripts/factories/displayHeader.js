import { createElementToCard } from '../utils/utils.js';

export const displayHeader = () => {
    const header = document.getElementById('header');

    const elLogo = createElementToCard('img', null, [
        { attribut: 'src', content: 'assets/images/logo.png' },
        { attribut: 'id', content: 'logo' },
        { attribut: 'alt', content: 'Les petits plats' },
        { attribut: 'tabindex', content: '1' },
    ]);

    const elA = createElementToCard('a', null, [
        { attribut: 'href', content: '#' },
    ]);

    elA.appendChild(elLogo);
    header.append(elA);
};
