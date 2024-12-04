import React from "react";
import { useValue } from "../../itemContext";
import styles from "./cart.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, total, handleAdd, handleRemove, login, setOrders} = useValue();
  const navigate = useNavigate();
  if(!login)
    navigate('/');

  function handlePurchase(item){
    let prd = {
      ...item,
      date: new Date().toLocaleDateString()
    }
    setOrders((prev)=> [...prev, prd])
    navigate('/orders')

  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}> 
       <h3>Cart Items:</h3>
       <h4>Total: &#x20B9; {total}</h4>
      </div>
      <div className={styles.items}>
      {cartItems? cartItems.map((item) => {
          return (
            <div className={styles.itemCard} key={item.id}>
              <img className={styles.image} src={item.image} alt={item.name}/>
              <h5>{item.name}</h5>
              <div className={styles.itemDetails}>
                <p>&#x20B9; {item.price}</p>
                <p>  
                  <img src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="minus" onClick={()=>handleRemove(item.id)}/>{item.qty}
                  <img src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="plus" onClick={()=> handleAdd(item)}/>
                  </p>
              </div>
              <button className={styles.itemButton} onClick={()=>handlePurchase(item)}> Purchase </button>
            </div>
          );
        }):
        toast.warning('No products added to cart')
      }
      </div>
    </div>
  );
}

export default Cart;
