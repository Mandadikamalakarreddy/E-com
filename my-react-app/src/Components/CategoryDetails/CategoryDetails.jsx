import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryDetails.css";

const CategoryDetails = ({addToCart}) => {
  const { catName } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        const category = data.productData.find(
          (category) => category.cat_name === catName
        );
        if (category && category.items) {
          setCategoryItems(category.items);
        } else {
          setCategoryItems([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching category items:", error);
      });
  }, [catName]);



  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{catName}</h1>
      {categoryItems.map((item) => (
        <div key={item.cat_name} className="category-item">
          <h2 style={{ textAlign: "center" }}>{item.cat_name}</h2>
          <div className="products">
            {item.products.map((product) => (
              <div key={product.productId} className="product-item">
                <img
                  src={product.catImg}
                  alt={product.productName}
                  width={300}
                />
                <div className="pro-details">
                  <h4>Product Name: {product.productName}</h4>
                  <h5>Price: {product.price}</h5>
                  <button onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
            <button onClick={()=>addToCart(product.productName,product.price,product.catImg)}>Go to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;