export class Filter {
    constructor() {
        this.searchInput = document.querySelector('#search-filter');
    }

    getRecipes() {
        function filterElement(characters, elements) {
            if (characters.length > 2) {
                elements.forEach((element) => {
                    if (
                        element.textContent.toLowerCase().includes(characters)
                    ) {
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'none';
                    }
                });
            }
        }

        this.searchInput.addEventListener('keyup', (e) => {
            this.searchLetters = e.target.value;
            this.searchResult = document.querySelectorAll('.search-result');
            filterElement(this.searchLetters, this.searchResult);
        });
    }
}
