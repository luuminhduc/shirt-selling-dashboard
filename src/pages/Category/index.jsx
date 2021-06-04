import React from "react";
import AddCategory from "../../components/AddCategory";
import CategoryList from "../../components/CategoryList";

const Category = () => {
  return (
    <div>
      <h1 className="text-3xl font-light tracking-wide mb-5">Category</h1>
      <AddCategory />
      <CategoryList />
    </div>
  );
};

export default Category;
