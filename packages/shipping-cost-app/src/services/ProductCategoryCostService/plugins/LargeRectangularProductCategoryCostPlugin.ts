import { isLargeSizeProduct, isRectangularShapeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class LargeRectangularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isLargeSizeProduct(product) && isRectangularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 12;
  }

  public getWeightCost(product: Product): number {
    const weight = product.weight;
    const isHeavy = weight >= 40;
    const isMedium = weight <= 20;
    const isLight = weight <= 10;
    const heavyWeightFee = 1.5;

    if (isHeavy) {
      return 28 + (weight - 40) * heavyWeightFee;
    }

    if (isLight) {
      return weight * 1.25;
    }

    if (isMedium) {
      return 15 + (weight - 10) * 0.75;
    }

    return 24 + (weight - 20) * 1.5;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.39;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.38;
    }

    return 0;
  }
}
