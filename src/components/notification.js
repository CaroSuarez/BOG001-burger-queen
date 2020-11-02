import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.scss";

const Notify = () =>
  toast.dark(
    <p>
      <span role="img" aria-label="potato" className="icon-not">
        &#x1f35f;
      </span>
      Order sent to kitchen!!!
    </p>,
    {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  export const NotifyErrorInput = () =>
  toast.error(
    <p>
      <span role="img" aria-label="alert" className="icon-not">
      &#x1f3af;
      </span>
      Please do not leave empty fields
    </p>,
    {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

export default Notify;
