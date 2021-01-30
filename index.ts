export interface IObserver<T> {
    update(args: T);
}

export interface IObserverable<T> {
    subscribe(observer: IObserver<T>);
    unsubscribe(observer: IObserver<T>);
    notify();
}

export abstract class Observable<T> implements IObserverable<T> {
    protected observers: IObserver<T>[] = [];

    private findObserverIndex(observer: IObserver<T>) {
        for (let i = 0; i < this.observers.length; i++) {
            if (this.observers[i] == observer) return i;
        }

        return -1;
    }

    subscribe(observer: IObserver<T>) {
        if (this.findObserverIndex(observer) != -1) {
            throw new Error("Observer already subscribed");
        }
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>) {
        const index = this.findObserverIndex(observer);
        if (index == -1) throw new Error("observer not subscribed");
        this.observers = this.observers.splice(index, 1);
    }

    abstract notify();
}