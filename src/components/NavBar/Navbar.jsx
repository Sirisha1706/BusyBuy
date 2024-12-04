import React from "react";
import styles from "./Navbar.module.css";
import { useValue } from "../../itemContext";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Navbar() {
  const {setLogin, login} = useValue();
  return (
    <>
    <div className={styles.container}>
      <h1>Busy Buy</h1>
      <div className={styles.buttonsWrapper}>
        <Link to='/'><button className={styles.button}>
          <img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="home"/>Home
        </button></Link>
        <Link to='/orders'>{login && <button className={styles.button}>
         <img src="https://cdn-icons-png.flaticon.com/128/2636/2636640.png" alt="orders"/>Orders
        </button>}</Link>
        <Link to='/cart'>{login && <button className={styles.button}>
          <img src="https://cdn-icons-png.flaticon.com/128/60/60992.png" alt="cart"/>Cart
        </button>}</Link>
        <Link to='/'>{login && <button className={styles.button} onClick={()=>setLogin(!login)}>
          <img src= 'https://cdn-icons-png.flaticon.com/128/1828/1828479.png' alt='logout'/>logout
        </button>}</Link>
        <Link to='/login'>{!login && <button className={styles.button}>
          <img src= "https://cdn-icons-png.flaticon.com/128/3596/3596092.png" alt='login'/>Sigin
        </button>}</Link>
      </div>
    </div>
    <Outlet/>
    <ToastContainer/>
    </>
  );
}

export default Navbar;
