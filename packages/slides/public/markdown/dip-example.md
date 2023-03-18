```ts [|1|11-13,15-17]
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
  ...
}

class PostgresPersistance<T> implements Persistance<T> {
  ...
}
```

---

```ts [|9,12]
interface Todo {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

class TodoService {
  constructor(private readonly persistance: Persistance<Todo>) {}

  public saveTodo(todo: Todo) {
    this.persistance.create(todo);
  }
}
```

---

```ts [|2-3,9-10]
function testApp() {
  const inMemoryPersistance = new InMemoryPersistance();
  const todoService = new TodoService(inMemoryPersistance);

  ...
}

function prodApp() {
  const postgresPersistance = new PostgresPersistance();
  const todoService = new TodoService(postgresPersistance);

  ...
}

function main() {
    if(process.env.NODE_ENV === "production") {
        prodApp();
    } else {
        testApp();
    }
}
```
