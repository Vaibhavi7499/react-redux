import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewShoppingCart = () => {
  let viewCart = useSelector((state) => state);
let dispatch = useDispatch();

  return (
    <div className="row d-flex justify-content-evenly w-100">
        <Link to="/">Back to home</Link>
      {viewCart.map((e) => (
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
            <button
              className="btn btn-danger add-cart-btn"
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: e?.id })}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewShoppingCart;
