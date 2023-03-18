import { ShippingMethodId } from "./ShippingMethod";

export interface ShippingCostSummary {
  totalCost: number;
  shippingMethodId: ShippingMethodId;
  products: ProductShippingCostSummary[];
}

export interface ProductShippingCostSummary {
  productId: string;
  baseCost: number;
  weightCost: number;
  perishableCost: number;
  fragilityCost: number;
  methodCost: number;
}

export function getTotalProductShippingCostSummary({
  baseCost,
  fragilityCost,
  perishableCost,
  methodCost,
  weightCost,
}: ProductShippingCostSummary): number {
  return baseCost + fragilityCost + perishableCost + methodCost + weightCost;
}

export function getTotalShippingCostSumary(
  productCostSummaries: ProductShippingCostSummary[]
): number {
  return productCostSummaries.reduce(
    (total, summary) => total + getTotalProductShippingCostSummary(summary),
    0
  );
}
