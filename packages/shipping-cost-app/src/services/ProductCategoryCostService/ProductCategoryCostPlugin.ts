import { Product } from "../../entities/Product";

export interface ProductCategoryCostPlugin {
  predicate(product: Product): boolean;
  getBaseCost(product: Product): number;
  getWeightCost(product: Product): number;
  getPerishableCost(product: Product): number;
  getFragilityCost(product: Product): number;
}
