import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAlert } from "../../redux/action/alertAction/actions";
import { addCategory } from "../../redux/action/categoryAction/actions";
import { timeStamp } from "../../firebase/config";

const AddCategory = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const categoryReducer = useSelector((state) => state.categoryReducer);
  const { categoryList } = categoryReducer;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      if (checkRepetitiveName()) {
        dispatch(
          handleAlert({
            text: "This category has been added",
            status: "warning",
          })
        );
      } else {
        dispatch(addCategory({ name, time: timeStamp() }));
      }
    } else {
      dispatch(
        handleAlert({ text: "Category can not be blank", status: "warning" })
      );
    }
  };

  const checkRepetitiveName = () => {
    return categoryList
      .map((el) => el.name.toUpperCase())
      .includes(name.toUpperCase());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-start items-center"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ex: Hoodie"
        className={`border border-solid focus:outline-none mr-3 focus:border-fuchsia-500 border-gray-100 py-2 px-4 rounded`}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-fuchsia-600 focus:outline-none  text-white rounded cursor-pointer hover:bg-fuchsia-500"
      >
        Add
      </button>
    </form>
  );
};

export default AddCategory;
