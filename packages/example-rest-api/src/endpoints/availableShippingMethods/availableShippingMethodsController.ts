import { Controller, Get, Inject, Param, ParseArrayPipe } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { GetAvailableShippingMethodsUseCase } from "@presentation/shipping-cost-app";
import { ShippingMethod } from "../../models";
import { GET_AVAILABLE_SHIPPING_METHODS_USE_CASE } from "../../tokens";

@Controller()
export class AvailableShippingMethodsController {
  constructor(
    @Inject(GET_AVAILABLE_SHIPPING_METHODS_USE_CASE)
    private readonly getAvailableShippingMethodsUseCase: GetAvailableShippingMethodsUseCase,
  ) {}

  @ApiOkResponse({
    type: ShippingMethod,
  })
  @Get("availableShippingMethods/:productIds")
  public async getAvailableShippingMethods(
    @Param("productIds", new ParseArrayPipe()) ids: string[],
  ): Promise<ShippingMethod[]> {
    return this.getAvailableShippingMethodsUseCase.execute(ids);
  }
}
