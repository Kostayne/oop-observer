export interface IObserver<T> {
    update(args: T): any;
}
export interface IObserverable<T> {
    subscribe(observer: IObserver<T>): any;
    unsubscribe(observer: IObserver<T>): any;
    notify(): any;
}
export declare abstract class Observable<T> implements IObserverable<T> {
    protected observers: IObserver<T>[];
    private findObserverIndex;
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    abstract notify(): any;
}
