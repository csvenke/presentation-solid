```ts
interface Persistance<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  remove(item: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  findManyById(ids: string[]): Promise<T[]>;
}
```

---

```ts
interface Persistance<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  remove(item: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  findManyById(ids: string[]): Promise<T[]>;
}

class InMemoryPersistance<T> implements Persistance<T> {
    ...
}

class PostgresPersistance<T> implements Persistance<T> {
  public initialize(): Promise<void> {
    ...
  }
  ...
}
```

---

```ts [|4-6]
function somewhere(persistance: Persistance<T>) {
  ...

  if (persistance instanceof PostgresPersistance) {
    persistance.initialize();
  }
}
```

---

```ts [2|12-14]
interface Persistance<T> {
  initialize(): Promise<void>;
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  remove(item: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  findManyById(ids: string[]): Promise<T[]>;
}

class InMemoryPersistance<T> implements Persistance<T> {
  public initialize(): Promise<void> {
    return Promise.resolve();
  }
  ...
}

class PostgresPersistance<T> implements Persistance<T> {
  public initialize(): Promise<void> {
    ...
  }
  ...
}
```
