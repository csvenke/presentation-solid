import {
  isCylindricalShapeProduct,
  isLargeSizeProduct,
  isRectangularShapeProduct,
  Product,
} from "../../../entities/Product";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class FreightShippingAvailabilityPlugin implements ShippingMethodAvailabilityPlugin {
  public getId(): ShippingMethodId {
    return ShippingMethodId.FreightShipping;
  }

  public isAvailable(product: Product): boolean {
    const isValidShape = isRectangularShapeProduct(product) || isCylindricalShapeProduct(product);
    const isValidSize = isLargeSizeProduct(product);
    return isValidSize && isValidShape && !product.isPerishable;
  }
}
