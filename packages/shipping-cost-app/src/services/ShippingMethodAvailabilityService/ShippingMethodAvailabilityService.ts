import { Product } from "../../entities/Product";
import { ShippingMethodId } from "../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "./ShippingMethodAvailabilityPlugin";

export interface ShippingMethodAvailabilityService {
  getAvailableShippingMethods(products: Product[]): ShippingMethodId[];
}

export class DefaultShippingMethodAvailabilityService implements ShippingMethodAvailabilityService {
  constructor(private readonly plugins: ShippingMethodAvailabilityPlugin[]) {}

  public getAvailableShippingMethods = (products: Product[]): ShippingMethodId[] =>
    this.plugins
      .filter((plugin) => products.every((product) => plugin.isAvailable(product)))
      .map((plugin) => plugin.getId());
}
