import { isMediumSizeProduct, isRectangularShapeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class MediumRectangularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isMediumSizeProduct(product) && isRectangularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 8;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 10) {
      return 8;
    }
    if (product.weight <= 20) {
      return 12;
    }
    if (product.weight <= 40) {
      return 20;
    }
    return 30;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.225;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.26;
    }

    return 0;
  }
}
