import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export class InternationalAirShippingAvailabilityPlugin
  implements ShippingMethodAvailabilityPlugin
{
  public getId(): ShippingMethodId {
    return ShippingMethodId.InternationalAirShipping;
  }
  public isAvailable(): boolean {
    return true;
  }
}
