export enum ProductSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum ProductShape {
  Rectangular = "Rectangular",
  Cylindrical = "Cylindrical",
  Irregular = "Irregular",
}

export interface Product {
  id: string;
  name: string;
  weight: number;
  size: ProductSize;
  shape: ProductShape;
  isFragile: boolean;
  isPerishable: boolean;
}

export const isSmallSizeProduct = (product: Product): boolean => product.size == ProductSize.Small;

export const isMediumSizeProduct = (product: Product): boolean =>
  product.size == ProductSize.Medium;

export const isLargeSizeProduct = (product: Product): boolean => product.size == ProductSize.Large;

export const isRectangularShapeProduct = (product: Product): boolean =>
  product.shape === ProductShape.Rectangular;

export const isCylindricalShapeProduct = (product: Product): boolean =>
  product.shape === ProductShape.Cylindrical;

export const isIrregularShapeProduct = (product: Product): boolean =>
  product.shape === ProductShape.Irregular;

export const isPerishableProduct = (product: Product): boolean => product.isPerishable;

export const isFragileProduct = (product: Product): boolean => product.isFragile;
