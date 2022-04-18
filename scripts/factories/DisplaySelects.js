import { createElementToCard } from '../utils/utils.js';

export class DisplaySelects {
    constructor() {
        this.selectInput = document.getElementById('selects-input');
    }

    createSelects() {
        this.elIngredients = createElementToCard('input', null, [
            { attribut: 'name', content: 'Ingredient' },
            { attribut: 'placeholder', content: 'Ingrédients' },
            { attribut: 'type', content: 'text' },
        ]);

        this.elApparel = createElementToCard('input', null, [
            { attribut: 'name', content: 'apparel' },
            { attribut: 'placeholder', content: 'Appareils' },
            { attribut: 'type', content: 'text' },
        ]);

        this.elUtensil = createElementToCard('input', null, [
            { attribut: 'name', content: 'utensil' },
            { attribut: 'placeholder', content: 'Ustensiles' },
            { attribut: 'type', content: 'text' },
        ]);

        this.selectInput.append(
            this.elIngredients,
            this.elApparel,
            this.elUtensil
        );
    }
}
