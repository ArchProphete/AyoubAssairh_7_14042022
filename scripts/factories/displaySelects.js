import { createElementToCard, mainHtmlID } from '../utils/utils.js';

export const displaySelects = () => {
    const main = mainHtmlID();

    const elIngredients = createElementToCard('input', null, [
        { attribut: 'name', content: 'Ingredient' },
        { attribut: 'placeholder', content: 'Ingrédients' },
        { attribut: 'type', content: 'text' },
    ]);

    const elApparel = createElementToCard('input', null, [
        { attribut: 'name', content: 'apparel' },
        { attribut: 'placeholder', content: 'Appareils' },
        { attribut: 'type', content: 'text' },
    ]);

    const elUtensil = createElementToCard('input', null, [
        { attribut: 'name', content: 'utensil' },
        { attribut: 'placeholder', content: 'Ustensiles' },
        { attribut: 'type', content: 'text' },
    ]);

    const elLabel = createElementToCard('label', null, [
        { attribut: 'id', content: 'label-selects-input' },
    ]);

    elLabel.append(elIngredients, elApparel, elUtensil);
    main.appendChild(elLabel);
};
