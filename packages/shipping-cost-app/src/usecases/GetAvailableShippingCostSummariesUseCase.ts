import { ShippingCostSummary } from "../entities/ShippingCostSummary";
import { GetAvailableShippingMethodsUseCase } from "./GetAvailableShippingMethodsUseCase";
import { GetShippingCostSummaryUseCase } from "./GetShippingCostSummaryUseCase";

export interface GetAvailableShippingCostSummariesUseCase {
  execute(productIds: string[]): Promise<ShippingCostSummary[]>;
}

export class DefaultGetAvailableShippingCostSummariesUseCase
  implements GetAvailableShippingCostSummariesUseCase
{
  constructor(
    private readonly getAvailableShippingMethodsUseCase: GetAvailableShippingMethodsUseCase,
    private readonly getShippingCostSummaryUseCase: GetShippingCostSummaryUseCase
  ) {}

  public async execute(productIds: string[]): Promise<ShippingCostSummary[]> {
    const availableShippingMethods = await this.getAvailableShippingMethodsUseCase.execute(
      productIds
    );
    const totalShippingCostSummaries = availableShippingMethods.map((method) =>
      this.getShippingCostSummaryUseCase.execute(method.id, productIds)
    );

    return Promise.all(totalShippingCostSummaries);
  }
}
