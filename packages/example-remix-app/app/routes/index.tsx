import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AvailableShippingMethods } from "../components/AvailableShippingMethods";
import { ProductList } from "../components/ProductList";
import { ShoppingCart } from "../components/ShoppingCart";
import { getShoppingCartFromRequest, useShoppingCart } from "../hooks/useShoppingCart";

export async function loader({ context, request }: LoaderArgs) {
  const {
    getAllProductsUseCase,
    getProductsByIdUseCase,
    getAvailableShippingCostSummariesUseCase,
  } = context.usecases;

  const products = await getAllProductsUseCase.execute();
  const productsInShoppingCart = getShoppingCartFromRequest(request);
  const productsInCart = await getProductsByIdUseCase.execute(productsInShoppingCart);
  const totalShippingCostSummaries = await getAvailableShippingCostSummariesUseCase.execute(
    productsInShoppingCart
  );

  return json({
    products,
    productsInCart,
    totalShippingCostSummaries,
  });
}

export default function Index() {
  const { products, productsInCart, totalShippingCostSummaries } = useLoaderData<typeof loader>();
  const { addToShoppingCart, isProductInCart, removeFromShoppingCart, emptyCart } =
    useShoppingCart();

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", maxWidth: "1100px", justifyContent: "center" }}>
        <div style={{ flex: "0.7" }}>
          <ProductList
            products={products}
            isProductInCart={isProductInCart}
            addToShoppingCart={addToShoppingCart}
          />
        </div>
        <div style={{ flex: "0.3" }}>
          <ShoppingCart
            cart={productsInCart}
            removeFromShoppingCart={removeFromShoppingCart}
            emptyCart={emptyCart}
          />
          <AvailableShippingMethods shippingCostSummaries={totalShippingCostSummaries} />
        </div>
      </div>
    </div>
  );
}
