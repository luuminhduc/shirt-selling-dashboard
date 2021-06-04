import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../../redux/action/alertAction/actions";

const AlertList = () => {
  const alertReducer = useSelector((state) => state.alertReducer);
  const { alertList } = alertReducer;

  const dispatch = useDispatch();

  const getIcon = (status) => {
    let icon;
    switch (status) {
      case "error":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
        break;
      case "info":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
        break;
      case "warning":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
        break;
      default:
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
    }
    return (
      <div
        className={`text-white flex justify-center items-center rounded-full rounded-l-none bg-${getColor(
          status
        )}-100`}
      >
        <span className={`bg-${getColor(status)}-500 p-1 rounded-lg`}>
          {icon}
        </span>
      </div>
    );
  };

  const getColor = (status) => {
    switch (status) {
      case "warning":
        return "yellow";
      case "info":
        return "purple";
      case "error":
        return "red";
      default:
        return "green";
    }
  };

  return (
    alertList.length > 0 && (
      <div className="fixed top-10 right-1 w-72">
        {alertList.map((item, idx) => (
          <div
            className={`grid z-20 bg-white gap-5 transition-all grid-cols-4 mb-5 shadow-2xl rounded  relative`}
            key={idx}
          >
            <svg
              onClick={() => dispatch(removeAlert(item.id))}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 cursor-pointer w-6 bg-gray-100 text-gray-400 rounded-full p-1 top-3 right-2 absolute"
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
            {getIcon(item.status)}
            <div className="col-span-3 px-3 py-10">{item.text}</div>
          </div>
        ))}
      </div>
    )
  );
};

export default AlertList;
