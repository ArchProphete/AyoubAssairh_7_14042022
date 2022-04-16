import { createElementToCard } from '../utils/utils.js';

export const displaySelectsGroup = () => {
    const main = document.getElementById('main');

    const elIngredients = createElementToCard('input', null, [
        { attribut: 'name', content: 'Ingredient' },
        { attribut: 'placeholder', content: 'Ingrédients' },
    ]);

    const elApparel = createElementToCard('input', null, [
        { attribut: 'name', content: 'apparel' },
        { attribut: 'placeholder', content: 'Appareils' },
    ]);

    const elUtensil = createElementToCard('input', null, [
        { attribut: 'name', content: 'utensil' },
        { attribut: 'placeholder', content: 'Ustensiles' },
    ]);

    const elLabel = createElementToCard('label', null, [
        { attribut: 'id', content: 'label-selects-input' },
    ]);

    elLabel.append(elIngredients, elApparel, elUtensil);
    main.appendChild(elLabel);
};
