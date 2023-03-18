## Example: Payroll API

---

```ts
class Employee {
  public calculatePay() { ... }
  public reportHours() { ... }
  public saveEmployee() { ... }
}
```

---

```ts [|3,7,11]
class Employee {
  public calculatePay() {
    this.regularHours();
    ...
  }
  public reportHours() {
    this.regularHours();
    ...
  }
  public saveEmployee() { ... }
  private regularHours() { ... }
}
```

---

```ts [1-2]
class PayCalculator {
  public calculatePay() {
    ...
  }
}
```

```ts [1-2]
class HourReporter {
  public reportHours() {
    ...
  }
}
```

```ts [1-2]
class EmployeeSaver {
  public saveEmployee() {
    ...
  }
}
```
