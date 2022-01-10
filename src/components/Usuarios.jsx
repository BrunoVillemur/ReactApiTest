import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export const Usuarios = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        obtenerUsuarios();
    },[]);
    


    const obtenerUsuarios = async() =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userss = await res.data;
        setUsers(userss);
    }

    return (
        <div className='container'>
            <h2>Lista de usuarios</h2>
            {
                users.map( item =>
                    <div>
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                    </div>
                )
            }
        </div>
    )
}
