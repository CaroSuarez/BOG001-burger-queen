import React from "react";
import UseOrdersPending from './UseOrdersPending'




const PendingOrders = () => {

  const currentOrdersList = UseOrdersPending() 

  return(      
    <ul className="ulPending">
        {currentOrdersList.map((order) =>     
        <li className='pendingItem' key = {order.orderId} ><div> Customer: {order.data.customer} </div> <div> Table : {order.data.table} </div></li>
    
    )}
    </ul> 
    
    
  )  
}

//onClick = {()=>Render(order.data)}
export default PendingOrders;


