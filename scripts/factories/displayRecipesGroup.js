import { createElementToCard } from '../utils/utils.js';

export const displayRecipesGroup = () => {
    const main = document.getElementById('main');

    const elH1 = createElementToCard('h1', 'Limonade de coco', null);

    const elSpan = createElementToCard('span', '10 min', null);

    const elLi = createElementToCard('li', 'coco', null);
    const elUl = createElementToCard('ul', null, null);

    const elP = createElementToCard('p', 'Lorem ipsum', null);

    const elDivFigcaption = createElementToCard('div', null, null);

    elUl.append(elLi);
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

    elDivRecipes.appendChild(elArticle);
    main.appendChild(elDivRecipes);
};
