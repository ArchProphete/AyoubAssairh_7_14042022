import { createElementToCard, truncate } from '../utils/utils.js';

export class DisplayRecipes {
    constructor(recipes) {
        this.recipes = recipes;
        this.labelRecipesDiv = document.getElementById('label-recipes');
    }

    createRecipes() {
        /*
        this.recipes = this.recipes.filter((recipe) => {
            if (recipe.id >= 15) {
                return recipe;
            }
        });
*/
        this.recipes.map((recipe) => {
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
                        ingredient.quantity ? ingredient.quantite : ''
                    } ${ingredient.unit ? ingredient.unit : ''} `,
                    null
                )
            );

            this.elUl = createElementToCard('ul', null, null);
            this.elP = createElementToCard(
                'p',
                truncate(recipe.description),
                null
            );
            this.elDivFigcaption = createElementToCard('div', null, null);

            this.elUl.append(...this.elLi);
            this.elDivFigcaption.append(
                this.elH1,
                this.elSpan,
                this.elUl,
                this.elP
            );

            this.elImg = createElementToCard('img', null, null);
            this.elDivFigure = createElementToCard('div', null, null);

            this.elDivFigure.append(this.elImg, this.elDivFigcaption);

            this.elArticle = createElementToCard('article', null, [
                { attribut: 'class', content: 'search-result' },
            ]);

            this.elArticle.appendChild(this.elDivFigure);
            this.labelRecipesDiv.appendChild(this.elArticle);
        });
    }
}
