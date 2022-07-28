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

export const filterInput = (characters, elements) => {
    if (characters.length > 2) {
        elements.forEach((element) => {
            if (element.textContent.toLowerCase().includes(characters)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    } else {
        // TODO Afficher toutes les recettes si - de 3 charactères
    }
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
