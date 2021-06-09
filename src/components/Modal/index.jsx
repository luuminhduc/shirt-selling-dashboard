import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../redux/action/modalAction/actions";

const Modal = () => {
  const modalReducer = useSelector((state) => state.modalReducer);
  const { modal, title, text, callback } = modalReducer;

  const dispatch = useDispatch();

  const handleOk = () => {
    if (callback) {
      callback();
    }
    dispatch(hideModal());
  };

  return modal ? (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full lg:max-w-md md:max-w-lg sm:max-w-3xl shadow-xl text-left p-4 rounded">
        <p className="text-xl mb-3">{title}</p>
        <p className="mb-3">{text}</p>
        <div className="flex flex-row justify-end items-center">
          <button
            onClick={handleOk}
            className="bg-rose-600 text-white px-5 cursor-pointer hover:bg-rose-500 py-2"
          >
            Ok
          </button>
          {callback && (
            <button
              onClick={() => dispatch(hideModal())}
              className="text-gray-500 cursor-pointer ml-3"
            >
              Cancle
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
