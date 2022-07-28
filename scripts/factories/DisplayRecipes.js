import { createElementToCard, truncate } from '../utils/utils.js';

class DisplayRecipes {
    constructor(recipe) {
        this.recipe = recipe;
        this.labelRecipesDiv = document.getElementById('label-recipes');
    }

    createRecipe() {
        let recipe = this.recipe;
        this.elH1 = createElementToCard('h1', recipe.name, [
            { attribut: 'class', content: 'title-recipe' },
        ]);
        this.elSpan = createElementToCard('span', `${recipe.time} min`, null);
        this.elLi = recipe.ingredients.map((ingredient) =>
            createElementToCard(
                'li',
                `${ingredient.ingredient}: ${ingredient.quantity} ${ingredient.unit}`,
                [{ attribut: 'class', content: 'ingredient-recipe' }]
            )
        );

        this.elUl = createElementToCard('ul', null, null);
        this.elP = createElementToCard('p', truncate(recipe.description), [
            { attribut: 'class', content: 'description-recipe' },
        ]);
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
            { attribut: 'class', content: 'recipe-article' },
            { attribut: 'tabindex', content: '5' },
        ]);

        this.elArticle.appendChild(this.elDivFigure);
        this.labelRecipesDiv.appendChild(this.elArticle);
    }
}

export { DisplayRecipes };
