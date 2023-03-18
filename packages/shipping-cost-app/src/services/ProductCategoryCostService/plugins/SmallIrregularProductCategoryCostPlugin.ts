import { isIrregularShapeProduct, isSmallSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class SmallIrregularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isSmallSizeProduct(product) && isIrregularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 7;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 5) {
      return 7;
    }
    if (product.weight <= 10) {
      return 10;
    }
    if (product.weight <= 20) {
      return 15;
    }
    return 22;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.1;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.12;
    }

    return 0;
  }
}
