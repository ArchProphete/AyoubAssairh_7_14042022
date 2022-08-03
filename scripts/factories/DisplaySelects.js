import {
    createElementToCard,
    deleteDuplicateValue,
    deleteOverlayAndResizeSelect,
} from '../utils/utils.js';
import { Filter } from '../controllers/Filter.js';
import { DisplayTags } from './factories.js';

class DisplaySelects {
    tagsIngredients = [];
    tagsUstensils = [];
    tagsApparels = [];

    constructor(recipe) {
        this.recipe = recipe;
        this.tag = new DisplayTags();
        this.selectInput = document.getElementById('selects-input');
    }

    createSelects() {
        // TODO Faire en sorte de n'en créé qu'un
        //  et de le mettre en display none
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
            const ingredient = e.target.dataset.title;
            this.tag.createTags(ingredient, color);

            // Récupère le titre et pousse le dans un tableau
            this.tagsIngredients.push(ingredient);
            // Retire du tableau global l'élément séléctionné
            this.uniqIngredient = this.uniqIngredient.filter(
                (el) => !this.tagsIngredients.includes(el)
            );
            console.log(this.uniqIngredient);
        });

        this.elUlApparels.addEventListener('click', (e) => {
            const color = '#68D9A4';
            const apparel = e.target.dataset.title;
            this.tag.createTags(apparel, color);
        });

        this.elUlUstensils.addEventListener('click', (e) => {
            const color = '#ED6454';
            const ustensil = e.target.dataset.title;
            this.tag.createTags(ustensil, color);
        });
    }
}

export { DisplaySelects };
