import { ExpeditedGroundShippingAvailabilityPlugin } from "./plugins/ExpeditedGroundShippingAvailabilityPlugin";
import { FreightShippingAvailabilityPlugin } from "./plugins/FreightShippingAvailabilityPlugin";
import { GroundShippingAvailabilityPlugin } from "./plugins/GroundShippingAvailabilityPlugin";
import { InternationalAirShippingAvailabilityPlugin } from "./plugins/InternationalAirShippingAvailabilityPlugin";
import { InternationalSeaShippingAvailabilityPlugin } from "./plugins/InternationalSeaShippingAvailabilityPlugin";
import { NextDayAirShippingAvailabilityPlugin } from "./plugins/NextDayAirShippingAvailabilityPlugin";
import { TwoDayAirShippingAvailabilityPlugin } from "./plugins/TwoDayAirShippingAvailabilityPlugin";
import { ShippingMethodAvailabilityPlugin } from "./ShippingMethodAvailabilityPlugin";

export const ALL_SHIPPING_METHOD_AVAILABILITY_PLUGINS: ShippingMethodAvailabilityPlugin[] = [
  new TwoDayAirShippingAvailabilityPlugin(),
  new NextDayAirShippingAvailabilityPlugin(),
  new InternationalAirShippingAvailabilityPlugin(),
  new InternationalSeaShippingAvailabilityPlugin(),
  new GroundShippingAvailabilityPlugin(),
  new FreightShippingAvailabilityPlugin(),
  new ExpeditedGroundShippingAvailabilityPlugin(),
];
