class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        model.subscribe('change', (data) => {
            console.log('RENDERING');
            view.render(data);
        });

        view.subscribe('searchBar', ({ value }) => {
            console.log('SEARCHBAR');
            model.searchFilter(value);
        });

        /*
        view.removeObserver('removeObserver', (value) => {
            model.searchFilter(value);
        });
        */
        this.init();
    }

    init() {
        fetch('../../data/recipes.json')
            .then((response) => response.json())
            // Envois les données fetchée au model
            .then(({ recipes }) => {
                this.model.setRecipes(recipes);
            });
    }
}

export { Controller };
