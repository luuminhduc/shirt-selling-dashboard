import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { showModal } from "../../redux/action/modalAction/actions";
import { deleteProduct } from "../../redux/action/productAction/actions";

const ProductTBody = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {list.map((item, idx) => (
        <tr key={idx}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="">
                <div className="text-sm font-medium text-gray-900">
                  {item.name}
                </div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.price}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              <img src={item.mainImage} className="w-10" alt="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.category}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <NavLink to="/" className="mr-2 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() =>
                dispatch(
                  showModal({
                    title: "Delete product",
                    text: "Are you sure you want to delete this data",
                    callback: () => dispatch(deleteProduct(item.id)),
                  })
                )
              }
              className="font-semibold inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>{" "}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductTBody;
