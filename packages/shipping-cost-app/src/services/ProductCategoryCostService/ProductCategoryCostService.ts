import { Product } from "../../entities/Product";
import { ProductShippingCostSummary } from "../../entities/ShippingCostSummary";
import { getShippingMethodCost, ShippingMethod } from "../../entities/ShippingMethod";
import { ProductCategoryCostPlugin } from "./ProductCategoryCostPlugin";

export interface ProductCostCategoryService {
  createSummary(product: Product, shippingMethod: ShippingMethod): ProductShippingCostSummary;
}

export class DefaultProductCategoryCostService implements ProductCostCategoryService {
  constructor(private readonly plugins: ProductCategoryCostPlugin[]) {}

  public createSummary(
    product: Product,
    shippingMethod: ShippingMethod
  ): ProductShippingCostSummary {
    const plugin = this.plugins.find((plugin) => plugin.predicate(product));

    if (!plugin) {
      throw new Error("Product category is not supported!");
    }

    return {
      productId: product.id,
      baseCost: plugin.getBaseCost(product),
      weightCost: plugin.getWeightCost(product),
      perishableCost: plugin.getPerishableCost(product),
      fragilityCost: plugin.getFragilityCost(product),
      methodCost: getShippingMethodCost(plugin.getBaseCost(product), shippingMethod),
    };
  }
}
