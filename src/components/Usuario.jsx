import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';


export const Usuario = () => {

    const [user,setUser]=useState([]);
    const {id} = useParams();

    useEffect(()=>{
        obtenerUsuario();
    },[]);
    


    const obtenerUsuario = async() =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userss = await res.data;
        setUser(userss);
    }


    return (
        <div>
            <h2>Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <small>Telefono {user.phone}</small>
        </div>
    )
}
