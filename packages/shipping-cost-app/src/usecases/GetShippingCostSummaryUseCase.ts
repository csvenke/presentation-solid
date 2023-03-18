import { Product } from "../entities/Product";
import { getTotalShippingCostSumary, ShippingCostSummary } from "../entities/ShippingCostSummary";
import { ShippingMethod, ShippingMethodId } from "../entities/ShippingMethod";
import { Persistance } from "../persistance/Persistance";
import { ProductCostCategoryService } from "../services/ProductCategoryCostService/ProductCategoryCostService";
import { ShippingMethodAvailabilityService } from "../services/ShippingMethodAvailabilityService/ShippingMethodAvailabilityService";

export interface GetShippingCostSummaryUseCase {
  execute(shippingMethodId: ShippingMethodId, productIds: string[]): Promise<ShippingCostSummary>;
}

export class DefaultGetShippingCostSummaryUseCase implements GetShippingCostSummaryUseCase {
  constructor(
    private readonly productRepository: Persistance<Product>,
    private readonly shippingMethodRepository: Persistance<ShippingMethod>,
    private readonly productCategoryCostService: ProductCostCategoryService,
    private readonly shippingMethodAvailabilityService: ShippingMethodAvailabilityService
  ) {}

  public async execute(
    shippingMethodId: ShippingMethodId,
    productIds: string[]
  ): Promise<ShippingCostSummary> {
    const [products, shippingMethod] = await Promise.all([
      this.productRepository.findManyById(productIds),
      this.shippingMethodRepository.findOneById(shippingMethodId),
    ]);

    const availableShippingMethodIds =
      this.shippingMethodAvailabilityService.getAvailableShippingMethods(products);

    if (!availableShippingMethodIds.includes(shippingMethod.id)) {
      throw new Error("Shipping method not available for all products!");
    }

    const productCostSummaries = products.map((product) =>
      this.productCategoryCostService.createSummary(product, shippingMethod)
    );

    const totalProductsCost = getTotalShippingCostSumary(productCostSummaries);

    return {
      shippingMethodId: shippingMethod.id,
      totalCost: totalProductsCost,
      products: productCostSummaries,
    };
  }
}
