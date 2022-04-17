import { createElementToCard, mainHtmlID } from '../utils/utils.js';

export const displayRecipes = (recipe) => {
    const main = mainHtmlID();

    const elH1 = createElementToCard('h1', recipe.name, null);
    const elSpan = createElementToCard('span', `${recipe.time}min`, null);
    const elLi = recipe.ingredients.map((ingredient) =>
        createElementToCard(
            'li',
            `${ingredient.ingredient ? ingredient.ingredient : ''}: ${
                ingredient.quantity ? ingredient.quantity : ''
            } ${ingredient.unit ? ingredient.unit : ''} `,
            null
        )
    );

    const elUl = createElementToCard('ul', null, null);
    const elP = createElementToCard('p', recipe.description, null);
    const elDivFigcaption = createElementToCard('div', null, null);

    elUl.append(...elLi);
    elDivFigcaption.append(elH1, elSpan, elUl, elP);

    const elImg = createElementToCard('img', null, null);
    const elDivFigure = createElementToCard('div', null, null);

    elDivFigure.append(elImg, elDivFigcaption);

    const elArticle = createElementToCard('article', null, null);

    elArticle.appendChild(elDivFigure);

    const elDivRecipes = createElementToCard('div', null, [
        { attribut: 'id', content: 'label-recipes' },
        { attribut: 'tabindex', content: '5' },
    ]);

    elDivRecipes.append(elArticle);
    main.appendChild(elDivRecipes);
};
