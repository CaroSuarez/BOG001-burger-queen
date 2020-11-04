import { useEffect, useState } from "react";
import {db} from "../../firebase.js";

const UseOrdersPending = () => {
    const [orders, setOrders] = useState([])
  
    useEffect(()=>{
      db
      .collection('odersprueba').where('state', "==", 'pending')
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

  export default UseOrdersPending;


  