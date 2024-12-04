import React from "react";
import styles from "./ItemCard.module.css";
import { useValue } from "../../itemContext";
import {useNavigate } from "react-router-dom";

function ItemCard({ name, price, id, image }) {
  const navigate = useNavigate();
  const {login, handleAdd} = useValue();
  let prod = {name, price, id, image}

  return (
    <div className={styles.itemCard}>
        <img className={styles.image} src={image} alt={name}/>
        <h5>{name}</h5>
        <p>&#x20B9; {price}</p>
        <button className={styles.itemButton} onClick={()=> {
          if(login) return handleAdd(prod)
          else return navigate('/login')}}> 
          Add To Cart 
        </button>
    </div>
  );
}

export default ItemCard;
