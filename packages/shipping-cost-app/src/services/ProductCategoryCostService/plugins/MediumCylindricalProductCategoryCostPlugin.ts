import { isCylindricalShapeProduct, isMediumSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class MediumCylindricalProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isMediumSizeProduct(product) && isCylindricalShapeProduct(product);
  }

  public getBaseCost(): number {
    return 9;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 10) {
      return 9;
    }
    if (product.weight <= 20) {
      return 14;
    }
    if (product.weight <= 40) {
      return 24;
    }
    return 36;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.32;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.28;
    }

    return 0;
  }
}
