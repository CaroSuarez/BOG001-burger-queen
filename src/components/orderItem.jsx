import React from "react";
import trash from "../assets/basura.png";
import plus from "../assets/mas.png";
import minus from "../assets/menos.png";
import "../views/waiter/waiter.scss";

function OrderItem(props) {
  return (
    <div className="Orderitem-box">
      <div className="cant">
        <p className="item-name">{props.quantity}</p>
      </div>
      <div className="product">
        <p className="item-product">{props.product}</p>
      </div>
      <div className="price">
        <p className="item-price">${props.newPrice}</p>
      </div>
      <div>
        <img
          onClick={props.restItem}
          className="icons"
          src={minus}
          alt="trash"
        />
        <img onClick={props.addItem} className="icons" src={plus} alt="trash" />
        <img
          onClick={props.deleteItem}
          className="icons"
          src={trash}
          alt="trash"
        />
      </div>
    </div>
  );
}
export default OrderItem;
