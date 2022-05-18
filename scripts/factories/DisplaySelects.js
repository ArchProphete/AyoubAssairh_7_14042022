import {
    createElementToCard,
    deleteDuplicateValue,
    deleteOverlayAndResizeSelect,
} from '../utils/utils.js';
import { Filter } from '../utils/Filter.js';
import { DisplayTags } from './DisplayTags.js';

export class DisplaySelects {
    ingredient = [];
    apparels = [];
    ustensils = [];

    constructor(recipes) {
        this.recipes = recipes;
        this.tag = new DisplayTags();
        this.selectInput = document.getElementById('selects-input');
    }

    createSelects() {
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

        this.elLabelIngredients = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-ingredients' },
        ]);

        this.elLabelIngredients.append(this.elIngredients, this.elIconI);

        this.elUlIngredients = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ingredients-dropdown' },
        ]);

        this.recipes.map((recipe) => {
            recipe.ingredients.map((ingredient) => {
                this.ingredient.push(ingredient.ingredient.toLowerCase());
            });
        });

        this.uniqIngredient = deleteDuplicateValue(this.ingredient);

        this.uniqIngredient.map((ingredient) => {
            this.elLiIngredients = createElementToCard('li', `${ingredient}`, [
                { attribut: 'class', content: 'dropdown-ingredients' },
                { attribut: 'title', content: `${ingredient}` },
            ]);
            this.elUlIngredients.appendChild(this.elLiIngredients);
        });

        // APPAREILS
        this.elApparel = createElementToCard('input', null, [
            { attribut: 'id', content: 'apparels-input' },
            { attribut: 'name', content: 'apparel' },
            { attribut: 'placeholder', content: 'Appareils' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes appareils` },
        ]);

        this.elIconA = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelAppareil = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-apparels' },
        ]);

        this.elLabelAppareil.append(this.elApparel, this.elIconA);

        this.elUlApparels = createElementToCard('ul', null, [
            { attribut: 'id', content: 'apparels-dropdown' },
        ]);

        this.recipes.map((appliance) => {
            this.apparels.push(appliance.appliance.toLowerCase());
        });

        this.uniqApparels = deleteDuplicateValue(this.apparels);

        this.uniqApparels.map((apparel) => {
            this.elLiApparels = createElementToCard('li', `${apparel}`, [
                { attribut: 'class', content: 'dropdown-apparels' },
                { attribut: 'title', content: `${apparel}` },
            ]);
            this.elUlApparels.appendChild(this.elLiApparels);
        });

        // USTENSILES
        this.elUstensil = createElementToCard('input', null, [
            { attribut: 'id', content: 'ustensils-input' },
            { attribut: 'name', content: 'utensil' },
            { attribut: 'placeholder', content: 'Ustensiles' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes ustensiles` },
        ]);

        this.elIconU = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelUstensils = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-ustensils' },
        ]);

        this.elLabelUstensils.append(this.elUstensil, this.elIconU);

        this.elUlUstensils = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ustensils-dropdown' },
        ]);

        this.recipes.map((recipe) => {
            this.ustensils = this.ustensils.concat(
                recipe.ustensils.map((name) => name.toLowerCase())
            );
        });

        let uniqUstensils = deleteDuplicateValue(this.ustensils);

        uniqUstensils.map((ustensil) => {
            this.elLiUstensil = createElementToCard('li', `${ustensil}`, [
                { attribut: 'class', content: 'dropdown-ustensils' },
                { attribut: 'title', content: `${ustensil}` },
            ]);
            this.elUlUstensils.appendChild(this.elLiUstensil);
        });

        // FINAL APPENDS
        this.selectInput.append(
            this.elLabelIngredients,
            this.elLabelAppareil,
            this.elLabelUstensils,
            this.elUlIngredients,
            this.elUlApparels,
            this.elUlUstensils
        );

        function createOverlay() {
            return createElementToCard('div', null, [
                {
                    attribut: 'class',
                    content: 'overlay',
                },
            ]);
        }

        // Hide all dropdown
        this.elUlIngredients.style.display = 'none';
        this.elUlApparels.style.display = 'none';
        this.elUlUstensils.style.display = 'none';

        this.elIngredients.addEventListener('click', () => {
            this.elUlIngredients.style.display = 'grid';
            this.elUlApparels.style.display = 'none';
            this.elUlUstensils.style.display = 'none';

            this.elLabelIngredients.style.width = '475px';
            this.elLabelAppareil.style.width = '70px';
            this.elLabelUstensils.style.width = '70px';

            const elOverlay = createOverlay();

            this.selectInput.appendChild(elOverlay);

            deleteOverlayAndResizeSelect(
                elOverlay,
                this.elUlIngredients,
                this.elUlApparels,
                this.elUlUstensils,
                this.elLabelIngredients,
                this.elLabelAppareil,
                this.elLabelUstensils
            );
        });

        this.elApparel.addEventListener('click', () => {
            this.elUlApparels.style.display = 'grid';
            this.elUlIngredients.style.display = 'none';
            this.elUlUstensils.style.display = 'none';

            this.elLabelIngredients.style.width = '70px';
            this.elLabelAppareil.style.width = '475px';
            this.elLabelUstensils.style.width = '70px';

            const elOverlay = createOverlay();

            this.selectInput.appendChild(elOverlay);

            deleteOverlayAndResizeSelect(
                elOverlay,
                this.elUlIngredients,
                this.elUlApparels,
                this.elUlUstensils,
                this.elLabelIngredients,
                this.elLabelAppareil,
                this.elLabelUstensils
            );
        });

        this.elUstensil.addEventListener('click', () => {
            this.elUlUstensils.style.display = 'grid';
            this.elUlApparels.style.display = 'none';
            this.elUlIngredients.style.display = 'none';

            this.elLabelIngredients.style.width = '70px';
            this.elLabelAppareil.style.width = '70px';
            this.elLabelUstensils.style.width = '475px';

            const elOverlay = createOverlay();

            this.selectInput.appendChild(elOverlay);

            deleteOverlayAndResizeSelect(
                elOverlay,
                this.elUlIngredients,
                this.elUlApparels,
                this.elUlUstensils,
                this.elLabelIngredients,
                this.elLabelAppareil,
                this.elLabelUstensils
            );
        });

        // Call filters functions
        this.filter = new Filter();
        this.filter.filterIngredients();
        this.filter.filterApparels();
        this.filter.filterUstensils();

        // Create tags
        this.elUlIngredients.addEventListener('click', (e) => {
            const color = '#3381F7';
            // TODO voir pour change title en dataset
            const ingredient = e.target.title;
            this.tag.createTags(ingredient, color);
        });

        this.elUlApparels.addEventListener('click', (e) => {
            const color = '#68D9A4';
            const apparels = e.target.title;
            this.tag.createTags(apparels, color);
        });

        this.elUlUstensils.addEventListener('click', (e) => {
            const color = '#ED6454';
            const ustensils = e.target.title;
            this.tag.createTags(ustensils, color);
        });
    }
}
