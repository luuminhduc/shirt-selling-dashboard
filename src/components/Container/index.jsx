import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryList } from "../../redux/action/categoryAction/actions";
import { fetchProductList } from "../../redux/action/productAction/actions";
import Header from "../Header";
import Modal from "../Modal";
import SideBar from "../SideBar";

const Container = ({ children }) => {
  const [sideBarActive, setSideBarActive] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchCategoryList());
  }, [dispatch]);

  return (
    <div className="text-blueGray-700 pb-10">
      <SideBar
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div
        className={`pt-5 pr-10 transition-all ${
          sideBarActive ? "pl-72" : "pl-40"
        }`}
      >
        <Header />
        <Modal />
        {children}
      </div>
    </div>
  );
};

export default Container;
