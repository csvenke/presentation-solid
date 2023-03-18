import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class GroundShippingAvailabilityPlugin implements ShippingMethodAvailabilityPlugin {
  public getId(): ShippingMethodId {
    return ShippingMethodId.GroundShipping;
  }
  public isAvailable(): boolean {
    return true;
  }
}
