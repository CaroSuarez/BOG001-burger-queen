import React from "react";
import UseSinglePendingOrder from './UseSinglePendingOrder'


const SinglePendingOrderComponent = (orderId) => {

    const selectedOrder = UseSinglePendingOrder(orderId);
  
    return(   

      <div>
        <div id = 'rectangle'></div>
        <div>CUSTOMER</div>
        <div>{selectedOrder.data.customer}</div>
        <div>TABLE</div>
        <div>Date and time of entry</div>
        <div>CANT</div>
        <div>PRODUCT</div>
      </div>
    


       
    )  
  }
  
  
  export default SinglePendingOrderComponent;
  
  
  

