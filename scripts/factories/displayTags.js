import { createElementToCard, mainHtmlID } from '../utils/utils.js';

export const displayTags = () => {
    const main = mainHtmlID();

    const elButton = createElementToCard('button', 'coco', [
        { attribut: 'class', content: 'tag-button' },
    ]);

    const elDiv = createElementToCard('div', null, [
        { attribut: 'id', content: 'label-tag-button' },
    ]);

    elDiv.appendChild(elButton);
    main.appendChild(elDiv);
};
