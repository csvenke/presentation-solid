Example: Angular lifecycle methods

---

```ts
@Component({
  selector: "app-hello",
  template: `./hello.component.html`,
})
class Hello implements OnInit {
  public ngOnInit() {
    console.log("Component mounted!");
  }
}
```

---

```ts
@Component({
  selector: "app-hello",
  template: `./hello.component.html`,
})
class Hello implements OnInit, OnDestroy {
  public ngOnInit() {
    console.log("Component mounted!");
  }
  public ngOnDestroy() {
    console.log("Component unmounted!");
  }
}
```

---

```ts
interface ComponentLifecycle {
  ngOnInit(): void;
  ngOnDestroy(): void;
  ngOnChanges(): void;
  ngDoCheck(): void
  ngAfterContentInit(): void;
  ngAfterContentChecked(): void;
  ngAfterViewInit(): void;
  ngAfterViewChecked:() void;
}

```

---

```ts
@Component({
  selector: "app-hello",
  template: `./hello.component.html`,
})
class Hello implements ComponentLifecycle {
  public ngOnInit() {
    console.log("Component mounted!");
  }
  public ngOnDestroy(): void {}
  public ngOnChanges(): void {}
  public ngDoCheck(): void {}
  public ngAfterContentInit(): void {}
  public ngAfterContentChecked(): void {}
  public ngAfterViewInit(): void {}
  public ngAfterViewChecked:() void {}
}
```
