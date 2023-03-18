import { Product } from "../../entities/Product";
import { ShippingMethodId } from "../../entities/ShippingMethod";

export interface ShippingMethodAvailabilityPlugin {
  isAvailable(product: Product): boolean;
  getId(): ShippingMethodId;
}
