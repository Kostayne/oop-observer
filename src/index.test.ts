import { IObserver, Observable } from "./index";

interface testProps {
    msg: string;
}

class TestObserver implements IObserver<testProps> {
    private mock: (args: testProps) => void;

    constructor(mock: (args: testProps) => void) {
        this.mock = mock;
    }

    update(args: testProps) {
        console.log(args.msg);
        this.mock(args);
    }
}

it("notifies", () => {
    const updateMock = jest.fn();

    const observable = new Observable<testProps>();
    const observer = new TestObserver(updateMock);

    observable.subscribe(observer);
    observable.notify({ msg: "Msg" });

    expect(updateMock).toBeCalledWith({ msg: "Msg" });
});

it("unsubscribes", () => {
    const unsubMock = jest.fn();

    const observable = new Observable<testProps>();
    const observer = new TestObserver(unsubMock);

    observable.subscribe(observer);
    observable.unsubscribe(observer);
    observable.notify({ msg: "Msg to unsubbed" });
    
    expect(unsubMock).toBeCalledTimes(0);
});

it("throwes an is not subscribed exeption", () => {
    const mock = jest.fn();

    const observable = new Observable<testProps>();
    const observer = new TestObserver(mock);

    try {
        expect(observable.unsubscribe(observer)).toThrowError("observer is not subscribed");
    }

    catch {

    }
});

it("throwes an is already subscribed exeption", () => {
    const mock = jest.fn();

    const observable = new Observable<testProps>();
    const observer = new TestObserver(mock);

    observable.subscribe(observer);

    try {
        expect(observable.subscribe(observer)).toThrowError("observer is already subscribed");
    }

    catch {

    }
});