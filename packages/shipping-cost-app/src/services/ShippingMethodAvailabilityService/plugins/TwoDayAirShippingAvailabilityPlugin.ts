import {
  isCylindricalShapeProduct,
  isMediumSizeProduct,
  isRectangularShapeProduct,
  isSmallSizeProduct,
  Product,
} from "../../../entities/Product";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class TwoDayAirShippingAvailabilityPlugin implements ShippingMethodAvailabilityPlugin {
  public getId(): ShippingMethodId {
    return ShippingMethodId.TwoDayAirShipping;
  }

  public isAvailable(product: Product): boolean {
    const isValidSize = isSmallSizeProduct(product) || isMediumSizeProduct(product);
    const isValidShape = isRectangularShapeProduct(product) || isCylindricalShapeProduct(product);
    return isValidSize && isValidShape;
  }
}
