import styles from "./Item.module.css";
import ItemCard from "./ItemCard";
import { useValue } from "../../itemContext";

function Items() {
  const {itemList, setCategory, setPrice, setSearch, price} = useValue();

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}> 
        <input type="text" placeholder="Search By Name" onChange={(e)=> setSearch(e.target.value)}/>
       <label  className={styles.slider}>Price: { price}<input type="range" min='1' max='10000' onChange={(e)=>setPrice(e.target.value)}/></label>
        <select onChange={(e)=>setCategory(e.target.value)}>
          <option value='' defaultChecked>All</option>
          <option value='women'>Women's Clothing</option>
          <option value='men'>Men's Clothing</option>
          <option value='electronics'>Electronics</option>
          <option value='jewellary'>Jewellary</option>
        </select>
      </div>
      <div className={styles.items}>
        {itemList.map((item) => (
          <ItemCard
            image={item.image}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
