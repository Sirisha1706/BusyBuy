import { useState } from 'react';
import {toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from 'react-router-dom';

import style from './Auth.module.css';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../../dbinit';


function Register(){
    const [user, setUsername] = useState('')
    const [email, setMail] = useState('')
    const [pswd, setPswd] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await addDoc(collection(db, 'user'), {
                username: user,
                email,
                password: pswd
    
            })
            toast.success('User Registered');
            navigate('/login')
        }
        catch(e){
            toast.error(`Error ${e}`)
        }
    }

    return(
        <div className={style.container}>
            <h1 className={style.heading}>Register</h1>
            <form className={style.form} onSubmit={handleSubmit} method='post'>
                <input type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="email" placeholder="Enter Email" onChange={(e)=>setMail(e.target.value)}/>
                <input type='password' placeholder="Enter Password" onChange={(e)=>setPswd(e.target.value)}/>
                <button className={style.button} type='Submit'>Register</button>
            </form>
            
        </div>
    );
}

export default Register;