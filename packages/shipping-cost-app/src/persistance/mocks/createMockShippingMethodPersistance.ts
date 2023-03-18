import { ShippingMethod, ShippingMethodId } from "../../entities/ShippingMethod";
import { InMemoryPersistance } from "../InMemoryPersistance";

const SHIPPING_METHODS: ShippingMethod[] = [
  {
    id: ShippingMethodId.GroundShipping,
    minimumCost: 5,
    modifier: 0,
  },
  {
    id: ShippingMethodId.ExpeditedGroundShipping,
    minimumCost: 7,
    modifier: 1.5,
  },
  {
    id: ShippingMethodId.TwoDayAirShipping,
    minimumCost: 10,
    modifier: 2.0,
  },
  {
    id: ShippingMethodId.NextDayAirShipping,
    minimumCost: 15,
    modifier: 3.0,
  },
  {
    id: ShippingMethodId.InternationalAirShipping,
    minimumCost: 25,
    modifier: 4.0,
  },
  {
    id: ShippingMethodId.InternationalSeaShipping,
    minimumCost: 15,
    modifier: 3.0,
  },
  {
    id: ShippingMethodId.FreightShipping,
    minimumCost: 50,
    modifier: 5.0,
  },
];

export function createMockShippingMethodPersistance() {
  const persistance = new InMemoryPersistance<ShippingMethod>();
  SHIPPING_METHODS.forEach((product) => {
    persistance.create(product);
  });
  persistance.initialize();
  return persistance;
}
