import Observable from '../utils/Observable.js';

class Model extends Observable {
    constructor() {
        super();
        this.recipes = [];
    }

    setRecipes(recipes) {
        this.recipes = recipes;
        // appel filtre
        this.notifyChange();
    }

    notifyChange() {
        console.log('notifyChange');
        this.notify('change', {
            recipes: this.recipes,
        });
    }
}

export { Model };
