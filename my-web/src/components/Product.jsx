import { useState } from "react";
import styles from "../styles/Product.module.scss";

const products = [
  { id: 1, image: "/images/product1.png", name: "Product 1", price: "$25" },
  { id: 2, image: "/images/product2.png", name: "Product 2", price: "$30" },
  { id: 3, image: "/images/product3.png", name: "Product 3", price: "$20" },
  { id: 4, image: "/images/product4.png", name: "Product 4", price: "$35" },
  { id: 5, image: "/images/product5.png", name: "Product 5", price: "$40" },
  { id: 6, image: "/images/product6.png", name: "Product 6", price: "$28" },
];

function Product() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className={styles.productSection}>
      <h1 className={styles.title}>Danh sách sản phẩm</h1>
      <div className={styles.productList}>
        {visibleProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <a href="#" className={styles.productName}>{product.name}</a>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className={styles.shopButton}>
        {showAll ? "ẨN BỚT SẢN PHẨM" : "TẤT CẢ SẢN PHẨM"}
      </button>
    </div>
  );
}

export default Product;
