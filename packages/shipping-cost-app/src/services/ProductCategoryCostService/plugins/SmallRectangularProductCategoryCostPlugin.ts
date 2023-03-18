import { isRectangularShapeProduct, isSmallSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class SmallRectangularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isSmallSizeProduct(product) && isRectangularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 5;
  }

  public getWeightCost(product: Product): number {
    if (product.weight <= 5) {
      return 5;
    }
    if (product.weight <= 10) {
      return 7;
    }
    if (product.weight <= 20) {
      return 10;
    }

    return 15;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.1;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.16;
    }

    return 0;
  }
}
