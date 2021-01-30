# OOP Obsever
observer - pattern that helps you to handle & dispath events

## IObserver
Сontains abstract update function. Use it to handle events.

## IObservable<Props>
Contains subcribe, unsibscribe functions to add / remove listeners.
And also notify function, to call all event handlers (IObservers)

## Observer
Class that realizes basic subscribe, unsubscribe functions.