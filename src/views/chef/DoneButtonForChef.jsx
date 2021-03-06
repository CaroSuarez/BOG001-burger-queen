import React, { Fragment, useContext } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoneButtonForChef = () => {
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  const notify = () =>
    toast.error("Please Check all products in the order!", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const orderStateAsPrepared = (orderIdentifier) => {
    console.log(singleOrder.data.order);

    let readyChefArray = singleOrder.data.order.map((item) => item.readyChef);
    let readyForDone = readyChefArray.every((check) => check === true);

    if (readyForDone) {
      db.collection("pedidos")
        .doc(orderIdentifier)
        .update({
          state: "prepared",
          done_time: new Date().toLocaleString("es-CO"),
        })
        .then(() => {
          console.log("updated the state to prepared");
        });

      setSingleOrder();
    } else {
      notify();
    }
  };

  return (
    <Fragment>
      <button
        className="doneButtonForChef"
        onClick={() => {
          orderStateAsPrepared(singleOrder.orderId);
        }}
      >
        DONE
      </button>
      <ToastContainer />
    </Fragment>
  );
};

export default DoneButtonForChef;
