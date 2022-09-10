import { createElementToCard } from '../utils/utils.js';
import { GetElementById } from '../utils/GetElementById.js';

class DisplayDropdownIngredients {
    constructor(ingredient) {
        this.ingredient = ingredient;
        this.ingredientsFitltered = [];
    }

    createSelectIngredients() {
        GetElementById.labelIngredients().remove();
        GetElementById.ingredientsDropdown().remove();
        // INGREDIENTS
        this.elIngredients = createElementToCard('input', null, [
            { attribut: 'id', content: 'ingredients-input' },
            { attribut: 'name', content: 'Ingredient' },
            { attribut: 'placeholder', content: 'Ingrédients' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes ingrédients` },
        ]);

        this.elIconI = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelIngredients = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-ingredients' },
        ]);

        this.elLabelIngredients.append(this.elIngredients, this.elIconI);

        this.eluLIngredientsDropdown = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ingredients-dropdown' },
        ]);

        this.ingredient.map((ingredient) => {
            this.elLiIngredients = createElementToCard('li', `${ingredient}`, [
                { attribut: 'class', content: 'dropdown-ingredients' },
                { attribut: 'title', content: `${ingredient}` },
                { attribut: 'data-title', content: `${ingredient}` },
                { attribut: 'id', content: `${ingredient}` },
            ]);
            this.eluLIngredientsDropdown.append(this.elLiIngredients);
        });

        GetElementById.divIngredients().append(
            this.elLabelIngredients,
            this.eluLIngredientsDropdown
        );

        GetElementById.selectsInput().appendChild(
            GetElementById.divIngredients()
        );

        this.elIngredients.addEventListener('input', (e) => {
            const value = e.target.value;

            this.ingredient.forEach((ingredient) => {
                if (ingredient.toLowerCase().includes(value)) {
                    document.getElementById(ingredient).style.display = 'block';
                    this.ingredientsFitltered.push(ingredient);
                } else {
                    document.getElementById(ingredient).style.display = 'none';
                    this.ingredientsFitltered.splice(ingredient);
                }
            });
            console.log(this.ingredientsFitltered);
        });
    }
}

export { DisplayDropdownIngredients };
