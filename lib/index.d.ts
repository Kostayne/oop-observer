export interface IObserver<T> {
    update(args: T): any;
}
export interface IObserverable<T> {
    subscribe(observer: IObserver<T>): any;
    unsubscribe(observer: IObserver<T>): any;
    notify(props: T): any;
}
export declare class Observable<T> implements IObserverable<T> {
    protected observers: IObserver<T>[];
    private findObserverIndex;
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(props: T): void;
}
