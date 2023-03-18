import { isCylindricalShapeProduct, isSmallSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class SmallCylindricalProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isSmallSizeProduct(product) && isCylindricalShapeProduct(product);
  }

  public getBaseCost(): number {
    return 6;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 5) {
      return 6;
    }
    if (product.weight <= 10) {
      return 8;
    }
    if (product.weight <= 20) {
      return 12;
    }
    return 18;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.09;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.11;
    }

    return 0;
  }
}
