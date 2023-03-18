/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

import type { ShippingCostUseCases } from "@presentation/shipping-cost-app";
import "@remix-run/node";
import type { DataFunctionArgs } from "@remix-run/node";

declare module "@remix-run/node" {
  export interface LoaderArgs extends DataFunctionArgs {
    context: { usecases: ShippingCostUseCases };
  }

  export interface ActionArgs extends DataFunctionArgs {
    context: { usecases: ShippingCostUseCases };
  }
}
