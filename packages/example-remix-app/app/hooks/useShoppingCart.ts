import type { Product } from "@presentation/shipping-cost-app";
import { useSearchParams } from "@remix-run/react";
import { useCallback } from "react";

export const useShoppingCart = () => {
  const [params, setParams] = useSearchParams();

  const getSelectedProducts = useCallback(() => params.get("cart")?.split(",") ?? [], [params]);

  const addToShoppingCart = useCallback(
    (product: Product) => {
      const newParams = [...getSelectedProducts(), product.id];
      params.set("cart", newParams.join(","));

      setParams(params);
    },
    [getSelectedProducts, params, setParams]
  );

  const removeFromShoppingCart = useCallback(
    (product: Product) => {
      const previousProductIds = getSelectedProducts();
      const newParams = previousProductIds.filter((it) => it !== product.id);

      if (newParams.length > 0) {
        params.set("cart", newParams.join(","));
      } else {
        params.delete("cart");
      }

      setParams(params);
    },
    [getSelectedProducts, params, setParams]
  );

  const isShoppingCartEmpty = () => getSelectedProducts().length === 0;

  const isProductInCart = (product: Product) =>
    getSelectedProducts().some((id) => id === product.id);

  const emptyCart = () => {
    setParams();
  };

  return {
    addToShoppingCart,
    removeFromShoppingCart,
    isShoppingCartEmpty,
    isProductInCart,
    emptyCart,
  };
};

export function getShoppingCartFromRequest(request: Request) {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  return search.get("cart")?.split(",") ?? [];
}
