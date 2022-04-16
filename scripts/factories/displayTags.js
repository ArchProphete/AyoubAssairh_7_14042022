import { createElementToCard } from '../utils/utils.js';

export const displayTags = () => {
    const main = document.getElementById('main');

    const elButton = createElementToCard('button', 'coco', [
        { attribut: 'class', content: 'tag-button' },
    ]);

    const elLabel = createElementToCard('label', null, [
        { attribut: 'id', content: 'label-tag-button' },
    ]);

    elLabel.appendChild(elButton);
    main.appendChild(elLabel);
};
