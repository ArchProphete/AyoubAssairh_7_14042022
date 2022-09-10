class Observable {
    constructor() {
        //this.observers = [];
        this.observers = new Map();
    }

    // Add an observer to this.observers.
    subscribe(name, observer) {
        let listeners = this.observers.get(name);

        if (!listeners) {
            listeners = [];
            this.observers.set(name, listeners);
        }
        listeners.push(observer);

        // this.observers.push(observer);
        // console.log(observer);
        // console.log(this.observers);
    }

    // Loops over this.observers and calls the update method on each observer.
    // The state object will call this method everytime it is updated.
    notify(name, value) {
        let listeners = this.observers.get(name);
        if (!listeners) {
            return;
        }
        listeners.forEach((observer) => {
            observer(value);
        });
    }

    // Remove an observer from this.observers.
    // TODO Changer comme le addObserver
    removeObserver(name, observer) {
        const removeIndex = this.observers.findIndex((obs) => {
            return observer === obs;
        });

        if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
        }
    }
}

export default Observable;
