# OOP Obsever
observer - pattern that helps you to handle & dispath events

## IObservable
Event emitter interface. Contains subscribe, unsubscribe and notify methods.

## Observable
Class with implementation IObservable interface. It's ready to work!

``` ts
// define event props
interface TestObserverProps {
    test: string;
}
```

## IObserver
Event listener interface. Has update function, that called with generic props.

``` ts
class TestObserver implements IObserver<TestObserverProps> {
    update(args: TestObserverProps) {
        // event handler code
        console.log(args.test);
    }
}
```

## Usage
When IObserver is defined just call notify method.

``` ts
const observerable = new Observer<TestObserverProps>();
const observer = new TestObserver();

observerable.subscribe(observer);
observerable.notify({ test: "Some text here" });
```

## :package: Install
    npm i oop-observer

:octocat: [Sources are available on github](https://github.com/Kostayne/oop-observer)