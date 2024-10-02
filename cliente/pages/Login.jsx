import React from 'react'
import { useState, useRef, useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const redirecionar = useNavigate()

    const { login } = useContext(UsuarioContext); //desestructurar el objeto

    const[error,setError] = useState('usuario no encontrado');

    const usuarioRef = useRef()
    const contraRef = useRef()

    function checkearUsuario(e){
        e.preventDefault();

        let objetoAmandar = {

            usuario: usuarioRef.current.value,
            contrasena: contraRef.current.value
        }

        axios.post('https://subir-server.vercel.app/usuarios', objetoAmandar).then( datos => {

            if (datos.data.mensajeError == 'no encontrado') {
                setError('no encontrado')
            }else{
                login(datos.data.nombre)
                redirecionar('/') // se pone asi porque la / es la ruta principal osea en este caso el inicio
            }
            console.log(datos.data);
        })

    }


  return (
   <>
   {error}

   <form action='#' method='post' onSubmit={checkearUsuario}>

    <label htmlFor='usu'>Nombre de Usuario </label>
    <input type='text' name='usuario' id='usu' ref={usuarioRef}/><br/>

    <label htmlFor='pass'>Contraseña </label>
    <input type='password' name='password' id='pass' ref={contraRef}/><br/>

    <input type='submit'  value="Iniciar sesión"/><br/>

   </form>
   
   
   
   </>
  )
}

export default Login