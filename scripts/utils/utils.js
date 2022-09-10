import { GetElementById } from './GetElementById.js';

/**
 * Set attribute and his content to an element
 * @param element
 * @param attr
 */
export const setAttr = (element, attr) => {
    attr.map((val) => element.setAttribute(val.attribut, val.content));
};

/**
 * Create card with his tafn his data and attribute and content
 * @param tag name of the tag
 * @param data Data to inject
 * @param attr Call setAttr if you need attribut
 * @returns {*}
 */
export const createElementToCard = (tag, data, attr) => {
    const element = document.createElement(tag);
    if (data) {
        element.innerHTML = data;
    }
    if (attr) {
        setAttr(element, attr);
    }
    return element;
};

export const truncate = (input) => {
    if (input.length > 150) {
        return input.substring(0, 150) + '...';
    }
    return input;
};

export const deleteDuplicateValue = (array) => {
    return [...new Set(array)];
};

export const createOverlay = () => {
    return createElementToCard('div', null, [
        {
            attribut: 'class',
            content: 'overlay',
        },
    ]);
};

export const deleteOverlayAndResizeSelect = (
    elOverlay,
    ingredientInput,
    apparelInput,
    ustensilInput,
    elLabelIngredients,
    elLabelApparel,
    elLabelUstensils
) => {
    elOverlay.addEventListener('click', () => {
        ingredientInput.style.display = 'none';
        apparelInput.style.display = 'none';
        ustensilInput.style.display = 'none';

        elLabelIngredients.style.width = '70px';
        elLabelApparel.style.width = '70px';
        elLabelUstensils.style.width = '70px';

        elOverlay.style.display = 'none';
    });
};

export const displayDropDown = (dropdownToDisplay) => {
    switch (dropdownToDisplay) {
        case 'ingredients':
            GetElementById.ingredientsDropdown().style.display = 'grid';
            GetElementById.apparelsDropdown().style.display = 'none';
            GetElementById.ustensilsDropdown().style.display = 'none';
            break;
        case 'apparels':
            GetElementById.apparelsDropdown().style.display = 'grid';
            GetElementById.ingredientsDropdown().style.display = 'none';
            GetElementById.ustensilsDropdown().style.display = 'none';
            break;
        case 'ustensils':
            GetElementById.ustensilsDropdown().style.display = 'grid';
            GetElementById.apparelsDropdown().style.display = 'none';
            GetElementById.ingredientsDropdown().style.display = 'none';
            break;
        default:
            break;
    }
};

export const expandWidthDropDown = (dropDownToExpand) => {
    switch (dropDownToExpand) {
        case 'ingredients':
            GetElementById.divIngredients().style.width = '475px';
            GetElementById.divApparels().style.width = '70px';
            GetElementById.divUstensils().style.width = '70px';
            break;
        case 'apparels':
            GetElementById.divIngredients().style.width = '70px';
            GetElementById.divApparels().style.width = '475px';
            GetElementById.divUstensils().style.width = '70px';
            break;
        case 'ustensils':
            GetElementById.divUstensils().style.width = '70px';
            GetElementById.divApparels().style.width = '70px';
            GetElementById.divUstensils().style.width = '475px';
            break;
        default:
            break;
    }
};
