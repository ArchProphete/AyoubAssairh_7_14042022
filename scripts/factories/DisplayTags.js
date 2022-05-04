import { createElementToCard } from '../utils/utils.js';

export class DisplayTags {
    constructor() {
        this.tagButton = document.getElementById('tag-button');
    }

    createTags() {
        this.elButton = createElementToCard('button', 'coco', [
            { attribut: 'class', content: 'tag-button' },
        ]);

        this.elIcon = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-circle-xmark' },
        ]);

        this.elButton.append(this.elIcon);
        this.tagButton.append(this.elButton);

        this.elButton.addEventListener('click', () => {
            this.elButton.style.display = 'none';
        });
    }
}
