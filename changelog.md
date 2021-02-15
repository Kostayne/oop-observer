## :warning: Interface changed
Now notify method in Observable class requires args and it's instance can be created.

``` ts
const observerable = new Observable<TestObserverProps>();
observerable.notify({ test: "Some text here" });
```

:octocat: [See sources & example on github](https://github.com/Kostayne/oop-observer)