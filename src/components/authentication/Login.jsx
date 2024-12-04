import { Link, useNavigate } from 'react-router-dom';
import style from './Auth.module.css';
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../dbinit';
import { toast } from 'react-toastify';
import { useValue } from '../../itemContext';

function Login(){
    const {setLogin, setUsr} = useValue();
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()
        try{
            const resp = await getDocs(query(collection(db, 'user'), where('email', '==', email)));
            let detl = resp.docs[0].data().password
            if(detl && detl === pswd){
                toast.success('Successfull login')
                setLogin((prev)=> !prev)
                setUsr(resp.docs[0].id)
                navigate('/')
            }
            else toast.error('Incorrect email or password')
        }
        catch(e){
            toast.error(`Error ${e}`)
        }
    }

    return(
        <div className={style.container}>
            <h1 className={style.heading}>Login</h1>
            <form className={style.form} onSubmit={handleLogin} method='post'>
                <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPswd(e.target.value)}/>
                <button className={style.button} type='Submit'>Login</button>
            </form>
            <Link to='/register'><p>Or Signup Instead.....</p></Link>
        </div>
    );
}

export default Login;