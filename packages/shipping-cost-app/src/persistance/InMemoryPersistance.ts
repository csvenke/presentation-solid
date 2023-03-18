import { Identifiable } from "./Identifiable";
import { Persistance } from "./Persistance";

export class InMemoryPersistance<Item extends Identifiable> implements Persistance<Item> {
  private readonly database = new Map<string, Item>();

  public initialize() {
    return Promise.resolve();
  }

  public create(item: Item): Promise<Item> {
    this.database.set(item.id, item);
    return Promise.resolve(item);
  }

  public update(item: Item): Promise<Item> {
    this.database.set(item.id, item);
    return Promise.resolve(item);
  }

  public delete(item: Item): Promise<Item> {
    this.database.delete(item.id);
    return Promise.resolve(item);
  }

  public findAll(): Promise<Item[]> {
    return Promise.resolve(Array.from(this.database.values()));
  }

  public findOneById(id: string): Promise<Item> {
    const item = this.database.get(id);

    if (!item) {
      return Promise.reject(new Error("Item does not exist!"));
    }

    return Promise.resolve(item);
  }

  public findManyById(ids: string[]): Promise<Item[]> {
    return Promise.all(ids.map((id) => this.findOneById(id))).catch(() => []);
  }
}
