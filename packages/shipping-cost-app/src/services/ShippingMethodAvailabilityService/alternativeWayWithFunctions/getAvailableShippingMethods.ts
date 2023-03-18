import { Product } from "../../../entities/Product";
import { ShippingMethodId } from "../../../entities/ShippingMethod";
import { ExpeditedGroundShippingAvailabilityPlugin } from "../plugins/ExpeditedGroundShippingAvailabilityPlugin";
import { FreightShippingAvailabilityPlugin } from "../plugins/FreightShippingAvailabilityPlugin";
import { GroundShippingAvailabilityPlugin } from "../plugins/GroundShippingAvailabilityPlugin";
import { InternationalAirShippingAvailabilityPlugin } from "../plugins/InternationalAirShippingAvailabilityPlugin";
import { InternationalSeaShippingAvailabilityPlugin } from "../plugins/InternationalSeaShippingAvailabilityPlugin";
import { NextDayAirShippingAvailabilityPlugin } from "../plugins/NextDayAirShippingAvailabilityPlugin";
import { TwoDayAirShippingAvailabilityPlugin } from "../plugins/TwoDayAirShippingAvailabilityPlugin";
import { ShippingMethodAvailabilityPlugin } from "../ShippingMethodAvailabilityPlugin";

export const makeGetAvailableShippingMethods =
  (plugins: ShippingMethodAvailabilityPlugin[]) =>
  (products: Product[]): ShippingMethodId[] =>
    plugins
      .filter((plugin) => products.every((product) => plugin.isAvailable(product)))
      .map((plugin) => plugin.getId());

export const getAvailableShippingMethods = makeGetAvailableShippingMethods([
  new TwoDayAirShippingAvailabilityPlugin(),
  new NextDayAirShippingAvailabilityPlugin(),
  new InternationalAirShippingAvailabilityPlugin(),
  new InternationalSeaShippingAvailabilityPlugin(),
  new GroundShippingAvailabilityPlugin(),
  new FreightShippingAvailabilityPlugin(),
  new ExpeditedGroundShippingAvailabilityPlugin(),
]);
