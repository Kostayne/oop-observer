export interface IObserver<T> {
    update(args: T);
}

export interface IObserverable<T> {
    subscribe(observer: IObserver<T>);
    unsubscribe(observer: IObserver<T>);
    notify(props: T);
}

export class Observable<T> implements IObserverable<T> {
    protected observers: IObserver<T>[] = [];

    private findObserverIndex(observer: IObserver<T>) {
        for (let i = 0; i < this.observers.length; i++) {
            if (this.observers[i] == observer) return i;
        }

        return -1;
    }

    subscribe(observer: IObserver<T>): void {
        if (this.findObserverIndex(observer) != -1) {
            throw new Error("Observer is already subscribed");
        }
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        const index = this.findObserverIndex(observer);
        if (index == -1) throw new Error("observer is not subscribed");
        this.observers.splice(index, 1);
    }

    notify(props: T): void {
        this.observers.forEach((observer) => {
            observer.update(props);
        });
    }
}