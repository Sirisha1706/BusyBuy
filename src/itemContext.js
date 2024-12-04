import { createContext, useState, useContext, useEffect } from "react";
import itemData from "./data/itemData";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [usr, setUsr] = useState('');
  const [itemList, setItemList] = useState([...itemData]);
  const [login, setLogin] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    let filteredItems = itemData.filter((item)=>{
        var itemS = search ? item.name.toLowerCase().includes(search.toLowerCase()) : true 
        var itemP = price>0 ? item.price <= price : true
        var itemC = category ? item.category === category : true

        return itemS && itemC && itemP
    })
    setItemList(filteredItems)
  }, [price, category, search])


  const handleAdd = (prod) => {
    const index = cartItems.findIndex((item) => item.id === prod.id);
    if (index === -1) {
      setCartItems([...cartItems, { ...prod, qty: 1 }]);
      setTotal(total + prod.price);
    } else {
        cartItems[index].qty+=1;
        setCartItems([...cartItems])
        setTotal(total + cartItems[index].price);
    }
  };

  const handleRemove = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      cartItems[index].qty-=1;
      setCartItems([...cartItems]);
      console.log(cartItems)
      setTotal(total - cartItems[index].price);
      if (cartItems[index].qty === 0) {
        cartItems.splice(index, 1);
      }
      setCartItems(cartItems);
    }
  };

  console.log(orders);
  
  return (
    <itemContext.Provider 
    value={{
      setLogin, itemList, setCategory, 
      setPrice, setSearch, login, 
      price, usr, setUsr, total, 
      setCartItems, cartItems, handleAdd,
      handleRemove, orders, setOrders}}>
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
