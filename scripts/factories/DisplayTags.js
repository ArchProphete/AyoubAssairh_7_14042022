import { createElementToCard, deleteDuplicateValue } from '../utils/utils.js';
import { GetElementById } from '../utils/GetElementById.js';

class DisplayTags {
    arrayButton = [];
    test = [];
    ingredient = [];
    constructor() {}

    createTags(element, backgroundColor) {
        this.elButton = createElementToCard('button', element, [
            { attribut: 'class', content: 'tag-button' },
            { attribut: 'tabindex', content: '3' },
            { attribut: 'aria-label', content: `${element}` },
            { attribut: 'title', content: `${element}` },
            { attribut: 'data-name', content: `${element}` },
        ]);

        this.elIcon = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-circle-xmark' },
        ]);

        this.elButton.append(this.elIcon);
        this.test.push(this.elButton);
        deleteDuplicateValue(this.test);

        GetElementById.tagButton().append(...this.test);

        this.arrayButton.push(this.elButton);

        this.arrayButton.find((tag) => {
            tag.addEventListener('click', (e) => {
                this.ingredient.push(e.target.dataset.name);
                console.log(this.ingredient);
                tag.style.display = 'none';
            });
        });

        this.elButton.style.backgroundColor = backgroundColor;
    }
}

export { DisplayTags };
