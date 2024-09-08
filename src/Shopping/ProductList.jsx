import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductList = () => {
    let dispatch = useDispatch();
  let [productList, setProductList] = useState([]);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductList(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="row d-flex justify-content-evenly w-100">
      {productList.map((e) => (
        <div
        key={e?.id}
          className="card col-md-4 m-3"
          style={{ width: "18rem", marginBottom: "10px" }}
        >
          <div className="text-center h-100">
            <img
              src={e?.image}
              className="pt-2 card-img-top"
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="cart-title">{e?.title}</h5>
            <p className="card-title">{e?.price}₹ </p>
              <button className="btn btn-primary add-cart-btn" onClick={()=>dispatch({type:"ADD_TO_CART" , payload:e})}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
