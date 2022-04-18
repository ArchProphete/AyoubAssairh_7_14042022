import { createElementToCard } from '../utils/utils.js';

export class DisplayRecipes {
    constructor() {
        this.labelRecipesDiv = document.getElementById('label-recipes');
    }

    createRecipes() {
        recipes.map((recipe) => {
            this.elH1 = createElementToCard('h1', recipe.name, null);
            this.elSpan = createElementToCard(
                'span',
                `${recipe.time} min`,
                null
            );
            this.elLi = recipe.ingredients.map((ingredient) =>
                createElementToCard(
                    'li',
                    `${ingredient.ingredient ? ingredient.ingredient : ''}: ${
                        ingredient.quantity ? ingredient.quantity : ''
                    } ${ingredient.unit ? ingredient.unit : ''} `,
                    null
                )
            );

            this.elUl = createElementToCard('ul', null, null);
            this.elP = createElementToCard('p', recipe.description, null);
            this.elDivFigcaption = createElementToCard('div', null, null);

            this.elUl.append(...this.elLi);
            this.elDivFigcaption.append(
                this.elH1,
                this.elSpan,
                this.elUl,
                this.elP
            );

            const elImg = createElementToCard('img', null, null);
            const elDivFigure = createElementToCard('div', null, null);

            elDivFigure.append(elImg, this.elDivFigcaption);

            const elArticle = createElementToCard('article', null, [
                { attribut: 'class', content: 'search-result' },
            ]);

            elArticle.appendChild(elDivFigure);

            this.labelRecipesDiv.appendChild(elArticle);
        });
    }
}
