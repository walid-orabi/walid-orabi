
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Cheeseburger",
      price: 34,
      image: process.env.PUBLIC_URL + "/download (6).jpg",
    },
    {
      id: 2,
      name: "Cheese Sandwich",
      price: 22,
      image: process.env.PUBLIC_URL + "/download (8).jpg",
    },
    {
      id: 3,
      name: "Chiken Burger",
      price: 23,
      image: process.env.PUBLIC_URL + "/download (9).jpg",
    },
    {
      id: 4,
      name: "fruit Salad",
      price: 12,
      image: process.env.PUBLIC_URL + "/download (5).jpg",
    },
      {
      id: 5,
      name: "Cocktail",
      price: 12,
      image: process.env.PUBLIC_URL + "/download (10).jpg",
    },
      {
      id: 6,
      name: "Milk shake",
      price: 4,
      image: process.env.PUBLIC_URL + "/download (11).jpg",
    },
  ];

  return (
    <div className="products-container">
      <h2>Menu</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}