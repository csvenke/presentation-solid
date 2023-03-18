import { Product } from "../entities/Product";
import { Persistance } from "../persistance/Persistance";

export interface GetAllProductsUseCase {
  execute(): Promise<Product[]>;
}

export class DefaultGetAllProductsUseCase implements GetAllProductsUseCase {
  constructor(private readonly productRepository: Persistance<Product>) {}

  public execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
