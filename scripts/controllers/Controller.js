class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        model.addObserver('change', (data) => {
            view.render(data);
        });
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
