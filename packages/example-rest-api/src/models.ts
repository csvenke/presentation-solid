import { ApiProperty } from "@nestjs/swagger";
import {
  ProductShape,
  ProductSize,
  ShippingMethodId,
} from "@presentation/shipping-cost-app";

export class Product {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  weight: number;
  @ApiProperty({ enum: ProductSize })
  size: ProductSize;
  @ApiProperty({ enum: ProductShape })
  shape: ProductShape;
  @ApiProperty()
  isFragile: boolean;
  @ApiProperty()
  isPerishable: boolean;
}

export class ShippingMethod {
  @ApiProperty({ enum: ShippingMethodId })
  id: ShippingMethodId;
  @ApiProperty()
  modifier: number;
  @ApiProperty()
  minimumCost: number;
}

export class ProductShippingCostSummary {
  @ApiProperty()
  productId: string;
  @ApiProperty()
  baseCost: number;
  @ApiProperty()
  weightCost: number;
  @ApiProperty()
  perishableCost: number;
  @ApiProperty()
  fragilityCost: number;
  @ApiProperty()
  methodCost: number;
}

export class ShippingCostSummary {
  @ApiProperty()
  totalCost: number;
  @ApiProperty({ enum: ShippingMethodId })
  shippingMethodId: ShippingMethodId;
  @ApiProperty({ type: ProductShippingCostSummary, isArray: true })
  products: ProductShippingCostSummary[];
}
