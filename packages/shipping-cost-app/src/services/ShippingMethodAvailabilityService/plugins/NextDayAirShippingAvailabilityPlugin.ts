import {
  isCylindricalShapeProduct,
  isRectangularShapeProduct,
  isSmallSizeProduct,
  Product,
} from "../../../entities/Product";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class NextDayAirShippingAvailabilityPlugin implements ShippingMethodAvailabilityPlugin {
  public getId(): ShippingMethodId {
    return ShippingMethodId.NextDayAirShipping;
  }

  public isAvailable(product: Product): boolean {
    const isValidSize = isSmallSizeProduct(product);
    const isValidShape = isRectangularShapeProduct(product) || isCylindricalShapeProduct(product);

    return isValidSize && isValidShape;
  }
}
