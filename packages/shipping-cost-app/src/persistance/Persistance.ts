export interface Persistance<T> {
  initialize(): Promise<void>;
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  delete(item: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  findManyById(ids: string[]): Promise<T[]>;
}
