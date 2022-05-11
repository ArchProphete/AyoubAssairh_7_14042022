import { createElementToCard } from '../utils/utils.js';

export class DisplayTags {
    constructor() {
        this.tagButton = document.getElementById('tag-button');
    }

    createTags(element, backgroundColor) {
        this.elButton = createElementToCard('button', element, [
            { attribut: 'class', content: 'tag-button' },
            { attribut: 'tabindex', content: '3' },
            { attribut: 'aria-label', content: `${element}` },
            { attribut: 'title', content: `${element}` },
        ]);

        this.elIcon = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-circle-xmark' },
        ]);

        this.elButton.append(this.elIcon);
        this.tagButton.append(this.elButton);

        this.elButton.style.backgroundColor = backgroundColor;
    }

    deleteTag() {
        this.elButton.addEventListener('click', () => {
            this.elButton.style.display = 'none';
        });
    }
}
