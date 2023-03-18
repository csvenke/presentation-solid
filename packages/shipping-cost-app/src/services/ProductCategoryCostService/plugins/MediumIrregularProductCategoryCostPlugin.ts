import { isIrregularShapeProduct, isMediumSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class MediumIrregularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isMediumSizeProduct(product) && isIrregularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 10;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 10) {
      return 10;
    }
    if (product.weight <= 20) {
      return 16;
    }
    if (product.weight <= 40) {
      return 28;
    }
    return 42;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.21;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.24;
    }

    return 0;
  }
}
