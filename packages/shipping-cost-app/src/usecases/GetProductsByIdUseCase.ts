import { Product } from "../entities/Product";
import { Persistance } from "../persistance/Persistance";

export interface GetProductsByIdsUseCase {
  execute(ids: string[]): Promise<Product[]>;
}

export class DefaultGetProductsByIdsUseCase implements GetProductsByIdsUseCase {
  constructor(private readonly productRepository: Persistance<Product>) {}

  public execute(ids: string[]): Promise<Product[]> {
    return this.productRepository.findManyById(ids);
  }
}
