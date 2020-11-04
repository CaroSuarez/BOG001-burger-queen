import { useEffect, useState } from "react";
import {db} from "../../firebase.js";

const UseSinglePendingOrder = (orderId) => {
    const [order, setOrder] = useState([])
  
    useEffect(()=>{
      db
      .collection('odersprueba')
      .doc(orderId)
      .where('state', "==", 'pending')
      .onSnapshot((snapshot) => {
          
        let singleOrder = snapshot.docs.map(doc =>  
          ({ orderId : doc.id,
            data :doc.data()
          }))
        setOrder(singleOrder)
      })
  
      
    }, [])
  
    return order
  
  }

  export default UseSinglePendingOrder;


  