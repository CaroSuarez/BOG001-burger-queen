import React from "react";
import UseOrdersDone from './UseOrdersDone'

const DoneOrders = () => {

  const currentOrdersList = UseOrdersDone()

  return(    
    <ul className = 'ulDone'>
        {currentOrdersList.map((order) =>     
        <li className='doneItem' key = {order.orderId}><div> Customer: {order.data.customer} </div> <div> Table : {order.data.table} </div></li>
    
    )}
    </ul>   
  )  
}

export default DoneOrders;

