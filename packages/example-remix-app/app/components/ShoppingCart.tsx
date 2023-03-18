import type { Product } from "@presentation/shipping-cost-app";

interface ShoppingCartProps {
  cart: Product[];
  removeFromShoppingCart(product: Product): void;
  emptyCart(): void;
}

export function ShoppingCart({ cart, removeFromShoppingCart, emptyCart }: ShoppingCartProps) {
  if (cart.length === 0) {
    return (
      <div>
        <h2>Shopping cart</h2>
        <div>No products selected</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div>
        <h2>Shopping cart</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {cart.map((it) => (
            <li key={it.id}>
              {it.name} <button onClick={() => removeFromShoppingCart(it)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            emptyCart();
          }}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
