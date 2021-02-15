import { IObserver, Observable } from "../index";

interface TestObserverProps {
    test: string;
}

class TestObserver implements IObserver<TestObserverProps> {
    update(args: TestObserverProps) {
        console.log(args.test);
    }
}

const observerable = new Observable<TestObserverProps>();
const observer = new TestObserver();

observerable.subscribe(observer);
observerable.notify({ test: "Some text here" });