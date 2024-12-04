import { useNavigate } from 'react-router-dom';
import styles from './orders.module.css'
import { useValue } from '../../itemContext';
import { toast } from 'react-toastify';

const Orders = ()=>{
    const {login, orders} = useValue();
    const navigate = useNavigate();
    if(!login)
        navigate('/login')
    if(!orders)
        toast.warning('No Orders made')
    return(
        <div className={styles.wrapper}>  
                <h3>My Orders:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Ordered on</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((ord)=>
                        <tr key={ord.id}>
                            <td>{ord.name}</td>
                            <td>{ord.date}</td>
                            <td>{ord.price} </td>
                            <td>{ord.qty}</td>
                            <td>{ord.price * ord.qty}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;