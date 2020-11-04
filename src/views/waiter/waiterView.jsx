import React, { useState } from "react";
import Header from "../../components/header.jsx";
import Item from "../../components/item.jsx";
import Order from "../../components/order.jsx";
import Menu from "../../data/menu.json";
import Modal from "../modal/modal";
import ModalContent from "../modal/modalContent.jsx";
import { ToastContainer } from "react-toastify";

function WaiterView() {
  const [menu, setMenu] = useState("Breakfast");
  const [order, setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  // para guardar el item seleccionado
  const [itemLunch, setItemLunch] = useState("");
  const data = Menu.Menu;
  console.log(order);

  const addExtrasOrder = (e) => {
    //utilizar la propiedad data que le pase al boton del modal
    //para agregarla a la orden
    console.log(e.target.dataset.egg);
    console.log(e.target.dataset.cheese);
    console.log(e.target.dataset.meat);
    console.log(itemLunch);
    let price = itemLunch.price;
    let product = itemLunch.product;
    let extra = [];
    console.log(extra.cheese);
    let key = itemLunch.id;
    let quantity = 1;

    if (e.target.dataset.meat !== "") {
      product += ", " + e.target.dataset.meat;
    }
    if (e.target.dataset.egg === "egg") {
      extra.push({
        id: "e-02",
        product: "Egg",
      });
      product += ", egg";
      price++;
    }
    if (e.target.dataset.cheese === "cheese") {
      extra.push({
        id: "e-01",
        product: "Cheese",
      });
      product += ", cheese";
      price++;
    }
    console.log(product);
    order.push({ key, product, price, quantity, extra });
    setOpen(false);
  };

  const addItemOrder = (item) => {
    // let productsOrder=[]
    if (item.type === "Lunch") {
      setOpen(true);
      console.log("entro hamburguesa");
      setItemLunch(item);
      //order.push({ key, product, price, quantity });
    } else {
      const price = item.price;
      const product = item.product;
      const key = item.id;
      const quantity = 1;
      // productsOrder.push({key, product, price, quantity})
      order.push({ key, product, price, quantity });
    }

    // console.log(productsOrder)
    setOrder([...order]);
  };

  return (
    <div>
      <div className="header-waiter">
        <Header rol="Waiter#" number={3} />
      </div>
      <div className="menu-container">
        <div className="menu-option">
          <nav className="menu-nav">
            <ol>
              <li className="title-nav" onClick={() => setMenu("Breakfast")}>
                BREAKFAST
              </li>
              <li className="title-nav" onClick={() => setMenu("Lunch")}>
                LUNCH
              </li>
              <li className="title-nav" onClick={() => setMenu("Drinks")}>
                DRINKS
              </li>
            </ol>
          </nav>
          <div className="data-button-product">
            {data
              .filter((sort) => sort.type.includes(menu))
              .map((item, index) => (
                <Item
                  onClick={() => {
                    addItemOrder(item);
                  }}
                  key={index}
                  product={item.product}
                  price={item.price}
                />
              ))}
            ;
          </div>
          <Modal open={open} close={() => setOpen(false)}>
            <ModalContent onClick={(e) => addExtrasOrder(e)} />
          </Modal>
          <ToastContainer />
        </div>
        <div className="menu-order">
          <Order order={order} />
        </div>
      </div>
    </div>
  );
}

export default WaiterView;
