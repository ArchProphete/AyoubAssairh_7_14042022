import { createElementToCard, deleteDuplicateValue } from '../utils/utils.js';

class DisplayDropdownIngredients {
    allIngredient = [];
    constructor(ingredient) {
        this.ingredient = ingredient;
    }

    createSelectIngredients() {
        // INGREDIENTS
        this.elIngredients = createElementToCard('input', null, [
            { attribut: 'id', content: 'ingredients-input' },
            { attribut: 'name', content: 'Ingredient' },
            { attribut: 'placeholder', content: 'Ingrédients' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes ingrédients` },
        ]);

        this.elIconI = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelIngredients = createElementToCard('label', null);

        this.elLabelIngredients.append(this.elIngredients, this.elIconI);

        this.elDivIngredients = createElementToCard('div', null, [
            { attribut: 'id', content: 'label-ingredients' },
        ]);

        this.elDivIngredients.append(
            this.elLabelIngredients,
            this.elIngredients
        );

        this.elUlIngredients = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ingredients-dropdown' },
        ]);

        this.allIngredient.push(this.ingredient.toLowerCase());

        this.uniqIngredient = deleteDuplicateValue(this.ingredient);

        this.uniqIngredient.map((ingredient) => {
            this.elLiIngredients = createElementToCard('li', `${ingredient}`, [
                { attribut: 'class', content: 'dropdown-ingredients' },
                { attribut: 'title', content: `${ingredient}` },
                { attribut: 'data-title', content: `${ingredient}` },
                { attribut: 'id', content: `${ingredient}` },
            ]);
            this.elUlIngredients.appendChild(this.elLiIngredients);
        });
    }
}

export { DisplayDropdownIngredients };
