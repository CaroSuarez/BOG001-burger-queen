import { useEffect, useState } from "react";
import {db} from "../../firebase.js";

const UseOrdersDone = () => {
    const [orders, setOrders] = useState([])
  
    useEffect(()=>{
      db
      .collection('odersprueba').where('state', "==", 'delivered')
      .onSnapshot((snapshot) => {
          
        let newOrders = snapshot.docs.map(doc =>  
          ({ orderId : doc.id,
            data :doc.data()
          }))
        setOrders(newOrders)
      })
  
      
    }, [])
  
    return orders
  
}




export default UseOrdersDone;


  