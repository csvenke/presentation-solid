import { isIrregularShapeProduct, isLargeSizeProduct, Product } from "../../../entities/Product";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class InternationalSeaShippingAvailabilityPlugin
  implements ShippingMethodAvailabilityPlugin
{
  public getId(): ShippingMethodId {
    return ShippingMethodId.InternationalSeaShipping;
  }
  public isAvailable(product: Product): boolean {
    return isLargeSizeProduct(product) || isIrregularShapeProduct(product);
  }
}
