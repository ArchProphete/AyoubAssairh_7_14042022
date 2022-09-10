import { createElementToCard } from '../utils/utils.js';
import { GetElementById } from '../utils/GetElementById.js';

class DisplayDropdownUstensils {
    constructor(ustensil) {
        this.ustensils = ustensil;
        this.ustensilsFiltered = [];
    }

    createSelectUstensils() {
        GetElementById.labelUstensils().remove();
        GetElementById.ustensilsDropdown().remove();
        // USTENSILES
        this.elUstensil = createElementToCard('input', null, [
            { attribut: 'id', content: 'ustensils-input' },
            { attribut: 'name', content: 'utensil' },
            { attribut: 'placeholder', content: 'Ustensiles' },
            { attribut: 'tabindex', content: '4' },
            { attribut: 'aria-label', content: `Mes ustensiles` },
        ]);

        this.elIconU = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elLabelUstensils = createElementToCard('label', null, [
            { attribut: 'id', content: 'label-ustensils' },
        ]);

        this.elLabelUstensils.append(this.elUstensil, this.elIconU);

        this.elUlUstensilsDropdown = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ustensils-dropdown' },
        ]);

        this.ustensils.map((ustensil) => {
            this.elLiUstensil = createElementToCard('li', `${ustensil}`, [
                { attribut: 'class', content: 'dropdown-ustensils' },
                { attribut: 'title', content: `${ustensil}` },
                { attribut: 'data-title', content: `${ustensil}` },
                { attribut: 'id', content: `${ustensil}` },
            ]);
            this.elUlUstensilsDropdown.appendChild(this.elLiUstensil);
        });

        GetElementById.divUstensils().append(
            this.elLabelUstensils,
            this.elUlUstensilsDropdown
        );

        GetElementById.selectsInput().appendChild(
            GetElementById.divUstensils()
        );

        this.elUstensil.addEventListener('input', (e) => {
            const value = e.target.value;

            this.ustensilsFiltered.forEach((ustensil) => {
                if (ustensil.toLowerCase().includes(value)) {
                    document.getElementById(ustensil).style.display = 'block';
                    this.ustensilsFiltered.push(ustensil);
                } else {
                    document.getElementById(ustensil).style.display = 'none';
                    this.ustensilsFiltered.splice(ustensil);
                }
            });
            console.log(this.ustensilsFiltered);
        });
    }
}

export { DisplayDropdownUstensils };
