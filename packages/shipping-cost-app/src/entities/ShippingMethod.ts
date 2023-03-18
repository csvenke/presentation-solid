export enum ShippingMethodId {
  GroundShipping = "GroundShipping",
  ExpeditedGroundShipping = "ExpeditedGroundShipping",
  TwoDayAirShipping = "TwoDayAirShipping",
  NextDayAirShipping = "NextDayAirShipping",
  InternationalAirShipping = "InternationalAirShipping",
  InternationalSeaShipping = "InternationalSeaShipping",
  FreightShipping = "FreightShipping",
}

export interface ShippingMethod {
  id: ShippingMethodId;
  modifier: number;
  minimumCost: number;
}

export function getShippingMethodCost(
  productBaseCost: number,
  shippingMethod: ShippingMethod
): number {
  const methodCost = productBaseCost * shippingMethod.modifier;
  const isAboveMinimum = methodCost > shippingMethod.minimumCost;
  return isAboveMinimum ? methodCost : shippingMethod.minimumCost;
}
