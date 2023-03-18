import type { ShippingCostSummary } from "@presentation/shipping-cost-app";
import { useShoppingCart } from "../hooks/useShoppingCart";

export interface AvailableShippingMethodsProps {
  shippingCostSummaries: ShippingCostSummary[];
}

export function AvailableShippingMethods({ shippingCostSummaries }: AvailableShippingMethodsProps) {
  const { isShoppingCartEmpty } = useShoppingCart();
  if (isShoppingCartEmpty()) {
    return <EmptyShippingMethods />;
  }

  return <NonEmptyShippingMethods shippingCostSummaries={shippingCostSummaries} />;
}

interface NonEmptyShippingMethodsProps {
  shippingCostSummaries: ShippingCostSummary[];
}

function NonEmptyShippingMethods({ shippingCostSummaries }: NonEmptyShippingMethodsProps) {
  return (
    <div>
      <h2>Available shipping methods</h2>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {shippingCostSummaries
          .sort((a, b) => a.totalCost - b.totalCost)
          .map((summary) => (
            <li key={summary.shippingMethodId}>
              <strong>{summary.shippingMethodId}</strong>
              <div>Total cost: {summary.totalCost}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

function EmptyShippingMethods() {
  return (
    <div>
      <h2>Available shipping methods</h2>
      <div>No products selected</div>
    </div>
  );
}
