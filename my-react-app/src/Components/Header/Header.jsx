import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  //   const [product, setProduct] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        // setProduct(data);
        setProductData(data.productData || []);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Category">
      {productData.map((item) => (
        <>
          <div className="Category-Data">
            <Link
              key={item.id}
              to={`/category/${item.cat_name}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="items">
                <img src={item.image} alt="" width={200} />
                <h3 key={item.cat_id}>{item.cat_name}</h3>
              </div>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default Header;
