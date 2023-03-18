import { isCylindricalShapeProduct, isLargeSizeProduct, Product } from "../../../entities/Product";
import { ProductCategoryCostPlugin } from "../ProductCategoryCostPlugin";

export class LargeCylindricalProductCategoryCostPlugin implements ProductCategoryCostPlugin {
  public predicate(product: Product): boolean {
    return isLargeSizeProduct(product) && isCylindricalShapeProduct(product);
  }

  public getBaseCost(): number {
    return 14;
  }

  public getWeightCost(product: Product): number {
    const weight = product.weight;
    const isHeavy = weight >= 40;
    const isLight = weight <= 10;
    const heavyWeightFee = 1.5;

    if (isHeavy) {
      return 28 + (weight - 40) * heavyWeightFee;
    }

    if (isLight) {
      return weight * 1.25;
    }

    return 20 + (weight - 20);
  }

  public getFragilityCost(product: Product): number {
    if (product.isFragile) {
      return this.getBaseCost() * 0.5;
    }

    return 0;
  }

  public getPerishableCost(product: Product): number {
    if (product.isPerishable) {
      return this.getBaseCost() * 0.4;
    }

    return 0;
  }
}
