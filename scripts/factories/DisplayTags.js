import { createElementToCard } from '../utils/utils.js';

export class DisplayTags {
    constructor() {
        this.tagButton = document.getElementById('tag-button');
    }

    // TODO faire le aria-label des tags
    createTags(selectType, backgroundColor) {
        this.elButton = createElementToCard('button', selectType, [
            { attribut: 'class', content: 'tag-button' },
            { attribut: 'tabindex', content: '3' },
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
