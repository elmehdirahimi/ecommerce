import React, { useEffect } from "react";
import { ProductCard, ProductCategory } from "../components/productCategory";
import "../css/productsrows.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function AllProductScreen(props) {
  const productsList = useSelector((state) => state.productsList); // apell au reducer productsList (productsList :productsListReducer)
  const { products, loading, error } = productsList;
  const dispatch = useDispatch();

  const filterHandler = (category, searchKeyword, sortOrder) => {
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div className="d-flex justify-content-center text-center" id="pluswrap">
      <div className="spinner-border text-secondary plus" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <ProductCategory filterHandler={filterHandler}></ProductCategory>
        <div className="row isotope-grid">
          {products.map((product) => (
            <ProductCard key={product._id} info={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProductScreen;
