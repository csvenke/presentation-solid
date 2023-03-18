## Example: Email validation

---

```ts [1|2|5|8|26]
function isValidEmail(email: string): boolean {
  if (email.length === 0) {
    return false;
  }
  if (email.indexOf("@") === -1) {
    return false;
  }
  if (email.indexOf(".") === -1) {
    return false;
  }
  if (email.indexOf(" ") !== -1) {
    return false;
  }
  if (email.indexOf("..") !== -1) {
    return false;
  }
  if (email.indexOf("@") !== email.lastIndexOf("@")) {
    return false;
  }
  if (email.indexOf(".") < email.lastIndexOf("@") + 2) {
    return false;
  }
  if (email.lastIndexOf(".") + 2 > email.length) {
    return false;
  }
  return true;
}
```

---

```ts [|1|2|4-5]
type Validator<T> = (input: T) => boolean;
type MakeValidator = <T>(validators: Validator<T>[]) => (value: T) => boolean;

const makeValidator: MakeValidator = 
  (validators) => (value) => validators.every((validator) => validator(value));
```

---

```ts [1-2|4-5|7-8|10-11|13-14]
const isNotEmpty: Validator<string> = (email) => 
  email.length !== 0;

const isAlphaPresent: Validator<string> = (email) => 
  email.includes("@");

const isDotPresent: Validator<string> = (email) => 
  email.indexOf(".") !== -1;

const hasNoWhiteSpace: Validator<string> = (email) => 
  email.indexOf(" ") === -1;

const noConsecutiveDots: Validator<string> = (email) => 
  email.indexOf("..") === -1;

const hasJustOneAlpha: Validator<string> = (email) =>
  !(email.indexOf("@") !== email.lastIndexOf("@"));

const hasDomainMinimumLength: Validator<string> = (email) =>
  !(email.indexOf(".") < email.lastIndexOf("@") + 2);

const hasValidTopLevelDomain: Validator<string> = (email) =>
  !(email.lastIndexOf(".") + 2 > email.length);
```

---

```ts
const isValidEmail = makeValidator([
  isNotEmpty,
  isAlphaPresent,
  isDotPresent,
  hasNoWhiteSpace,
  noConsecutiveDots,
  hasJustOneAlpha,
  hasDomainMinimumLength,
  hasValidTopLevelDomain,
]);

isValidEmail("hello@world.com") // true
```

---

```ts [3-6]
type Validator<T> = (input: T) => boolean;
type MakeValidator = <T>(validators: Validator<T>[]) => (value: T) => boolean;

const makeValidator: MakeValidator = 
  (validators) => (value) => validators.every((validator) => validator(value));

const isValidEmail = makeValidator([
  isNotEmpty,
  isAlphaPresent,
  isDotPresent,
  hasNoWhiteSpace,
  noConsecutiveDots,
  hasJustOneAlpha,
  hasDomainMinimumLength,
  hasValidTopLevelDomain,
]);

isValidEmail("hello@world.com") // true
```
