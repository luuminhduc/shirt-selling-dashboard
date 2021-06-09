import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  sortProductByName,
  sortProductByPrice,
} from "../../redux/action/productAction/actions";
import ProductTBody from "../ProductTBody";
import SearchProduct from "../SearchProduct";

const ProductList = () => {
  const productReducer = useSelector((state) => state.productReducer);
  const { productList, searchTerm, sortTerm, sortTermName } = productReducer;
  const [list, setList] = useState(productList);
  const dispatch = useDispatch();
  const processSearchTerm = () => {
    return setList(
      productList.filter(
        (item) => item.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
    );
  };

  useEffect(() => {
    setList(productList);
  }, [productList]);

  useEffect(() => {
    processSortTerm();
  }, [sortTerm]);
  useEffect(() => {
    processSortTermName();
  }, [sortTermName]);
  useEffect(() => {
    processSearchTerm();
  }, [searchTerm]);

  const processSortTerm = () => {
    switch (sortTerm) {
      case "asc":
        setList([...list.sort((a, b) => +a.price - +b.price)]);
        break;
      case "desc":
        setList([...list.sort((a, b) => +b.price - +a.price)]);
        break;
      default:
    }
  };

  const processSortTermName = () => {
    switch (sortTermName) {
      case "asc":
        setList([
          ...list.sort(
            (a, b) =>
              getFirstLetter(a.name).charCodeAt(0) -
              getFirstLetter(b.name).charCodeAt(0)
          ),
        ]);
        break;
      case "desc":
        setList([
          ...list.sort(
            (a, b) =>
              getFirstLetter(b.name).charCodeAt(0) -
              getFirstLetter(a.name).charCodeAt(0)
          ),
        ]);
        break;
      default:
    }
  };

  const getFirstLetter = (string) => {
    return string.split("")[0].toUpperCase();
  };

  return (
    <div>
      {productList.length > 0 && (
        <div className="flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow p-5 overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <div className="mb-5">
                  <SearchProduct />
                </div>
                <table className="min-w-full ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex flex-row justify-start items-center">
                          <span>Name</span>
                          <div className=" text-gray-400 inline-block">
                            <svg
                              onClick={() => dispatch(sortProductByName("asc"))}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 cursor-pointer ${
                                sortTermName === "asc" && "text-orange-500"
                              } hover:text-orange-600`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <svg
                              onClick={() =>
                                dispatch(sortProductByName("desc"))
                              }
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 cursor-pointer ${
                                sortTermName === "desc" && "text-orange-500"
                              } hover:text-orange-600`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 flex flex-row justify-start items-center text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span>Price</span>
                        {/* SORT PRICE ICON */}
                        <div className=" flex flex-col items-center justify-center text-gray-400 ml">
                          <svg
                            onClick={() => dispatch(sortProductByPrice("asc"))}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 cursor-pointer ${
                              sortTerm === "asc" && "text-orange-500"
                            } hover:text-orange-600`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            onClick={() => dispatch(sortProductByPrice("desc"))}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 cursor-pointer ${
                              sortTerm === "desc" && "text-orange-500"
                            } hover:text-orange-600`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Image
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <ProductTBody list={list} />
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
