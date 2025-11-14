import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import "bootstrap/dist/css/bootstrap.min.css";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CardContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "250px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <hr style={{ margin: "20px 0" }} />
          <h3>Total: ${total}</h3>
          <button
            onClick={clearCart}
            style={{
              background: "#333",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
