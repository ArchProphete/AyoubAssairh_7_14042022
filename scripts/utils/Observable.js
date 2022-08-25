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

        //this.observers.push(observer);
        console.log(observer);
        console.log(this.observers);
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

    // Loops over this.observers and calls the update method on each observer.
    // The state object will call this method everytime it is updated.
    notify(name, value) {
        console.log(name);
        console.log(value);

        let listeners = this.observers.get(name);
        if (!listeners) {
            console.log(listeners);
            return;
        }
        listeners.forEach((observer) => {
            observer(value);
        });
    }

    prototype = {
        subscribe: function (fn) {
            this.observers.push(fn);
            console.log(this.observers);
        },
        unsubscribe: function (fnToRemove) {
            this.observers = this.observers.filter((fn) => {
                if (fn !== fnToRemove) return fn;
            });
        },
        fire: function () {
            this.observers.forEach((fn) => {
                fn.call();
            });
        },
    };
}

export default Observable;
