import { Product } from "../entities/Product";
import { ShippingMethod } from "../entities/ShippingMethod";
import { Persistance } from "../persistance/Persistance";
import { ShippingMethodAvailabilityService } from "../services/ShippingMethodAvailabilityService/ShippingMethodAvailabilityService";

export interface GetAvailableShippingMethodsUseCase {
  execute(productIds: string[]): Promise<ShippingMethod[]>;
}

export class DefaultGetAvailableShippingMethodsUseCase
  implements GetAvailableShippingMethodsUseCase
{
  constructor(
    private readonly productRepository: Persistance<Product>,
    private readonly shippingMethodRepository: Persistance<ShippingMethod>,
    private readonly shippingMethodAvailabilityService: ShippingMethodAvailabilityService
  ) {}

  public async execute(productIds: string[]): Promise<ShippingMethod[]> {
    const products = await this.productRepository.findManyById(productIds);
    const availableShippingMethodIds =
      this.shippingMethodAvailabilityService.getAvailableShippingMethods(products);
    return this.shippingMethodRepository.findManyById(availableShippingMethodIds);
  }
}
