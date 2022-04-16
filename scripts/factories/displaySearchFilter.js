import { createElementToCard } from '../utils/utils.js';

export const displaySearchFilter = () => {
    const main = document.getElementById('main');

    const elInput = createElementToCard('input', null, [
        { attribut: 'id', content: 'search-filter' },
        { attribut: 'type', content: 'text' },
        { attribut: 'placeholder', content: 'Rechercher une recette' },
        { attribut: 'tabindex', content: '2' },
    ]);

    const elLabel = createElementToCard('label', null, [
        { attribut: 'id', content: 'label-search-filter' },
    ]);

    elLabel.appendChild(elInput);
    main.appendChild(elLabel);
};
