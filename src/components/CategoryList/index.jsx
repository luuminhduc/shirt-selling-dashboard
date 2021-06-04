import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../redux/action/categoryAction/actions";

const CategoryList = () => {
  const categoryReducer = useSelector((state) => state.categoryReducer);
  const { categoryList } = categoryReducer;

  const dispatch = useDispatch();

  const renderCategoryList = () => {
    return (
      <div className="flex flex-wrap">
        {categoryList.map((item, idx) => (
          <div
            className="px-7 relative py-5 rounded-2xl text-orange-500 bg-orange-100 mr-3 mb-3"
            key={idx}
          >
            <svg
              onClick={() => dispatch(deleteCategory(item.id))}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 absolute top-1 right-1 cursor-pointer bg-red-200 p-1 rounded-full w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-10">
      <div className="my-5">{categoryList.length} categories</div>
      {categoryList.length > 0 ? renderCategoryList() : <div></div>}
    </div>
  );
};

export default CategoryList;
