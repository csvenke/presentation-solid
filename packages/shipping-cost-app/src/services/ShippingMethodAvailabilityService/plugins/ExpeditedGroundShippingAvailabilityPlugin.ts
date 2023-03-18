import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class ExpeditedGroundShippingAvailabilityPlugin implements ShippingMethodAvailabilityPlugin {
  public getId(): ShippingMethodId {
    return ShippingMethodId.ExpeditedGroundShipping;
  }
  public isAvailable(): boolean {
    return true;
  }
}
