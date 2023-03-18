import {
  Controller,
  Get,
  Inject,
  Param,
  ParseArrayPipe,
  Query,
} from "@nestjs/common";
import { ApiOkResponse, ApiQuery } from "@nestjs/swagger";
import {
  GetShippingCostSummaryUseCase,
  ShippingMethodId,
} from "@presentation/shipping-cost-app";
import { ShippingCostSummary } from "../../models";
import { GET_SHIPPING_COST_SUMMARY_USE_CASE } from "../../tokens";

@Controller()
export class ShippingCostSummaryController {
  constructor(
    @Inject(GET_SHIPPING_COST_SUMMARY_USE_CASE)
    private readonly getShippingCostSummaryUseCase: GetShippingCostSummaryUseCase,
  ) {}

  @ApiOkResponse({
    type: ShippingCostSummary,
  })
  @ApiQuery({ name: "shippingMethodId", enum: ShippingMethodId })
  @Get("shippingCostSummary/:shippingMethodId/:productIds")
  public async totalShippingCostSummary(
    @Query("shippingMethodId") shippingMethodId: ShippingMethodId,
    @Param("productIds", new ParseArrayPipe()) productIds: string[],
  ): Promise<ShippingCostSummary> {
    return this.getShippingCostSummaryUseCase.execute(
      shippingMethodId,
      productIds,
    );
  }
}
