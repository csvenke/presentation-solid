import { isIrregularShapeProduct, isLargeSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class LargeIrregularProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isLargeSizeProduct(product) && isIrregularShapeProduct(product);
  }

  public getBaseCost(): number {
    return 16;
  }

  public getWeightCost(product: Product): number {
    const weight = product.weight;
    const isHeavy = weight >= 40;
    const isMedium = weight <= 20;
    const isLight = weight <= 10;
    const heavyWeightFee = 2;

    if (isHeavy) {
      return 32 + (weight - 40) * heavyWeightFee;
    }

    if (isLight) {
      return weight * 1.5;
    }

    if (isMedium) {
      return 18 + (weight - 10) * 1;
    }

    return 30 + (weight - 20) * 2;
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.35;
    }
    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.43;
    }
    return 0;
  }
}
