import type { Product } from "@presentation/shipping-cost-app";
import { useShoppingCart } from "../hooks/useShoppingCart";

interface ProductListProps {
  products: Product[];
  isProductInCart(product: Product): boolean;
  addToShoppingCart(product: Product): void;
}

export function ProductList({ products, isProductInCart, addToShoppingCart }: ProductListProps) {
  return (
    <div>
      <h2>Products</h2>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div>
              <strong>{product.name}</strong>
              <div>Shape: {product.shape}</div>
              <div>Size: {product.size}</div>
              <div>Weight: {product.weight}</div>
            </div>
            <div>
              <button
                disabled={isProductInCart(product)}
                onClick={() => addToShoppingCart(product)}
              >
                {isProductInCart(product) ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
