import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/action/productAction/actions";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  const { searchTerm } = productReducer;
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => dispatch(searchProduct(e.target.value))}
      placeholder="Search product..."
      className="bg-gray-50 p-3 focus:outline-none hover:shadow"
    />
  );
};

export default SearchProduct;
