import { createElementToCard } from '../utils/utils.js';

export class DisplayTags {
    constructor() {
        this.tagButton = document.getElementById('tag-button');
    }

    createTags() {
        this.elButton = createElementToCard('button', 'coco', [
            { attribut: 'class', content: 'tag-button' },
        ]);
        this.tagButton.appendChild(this.elButton);
    }
}
