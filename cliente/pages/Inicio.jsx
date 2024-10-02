import React from 'react'
import mediano from '../img/mediano.jpeg'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Inicio() {
    
  const readMore = () => {
  }

  return (
    <>
      <section className='contenedor'>
        <div className='card'>
          <img src={mediano} alt="f1" className='card_imagen' />
          <span id='puntos'>...</span>
          <p id='inicio__texto'>Aston Martin ya prepara mejoras,
            <span id='mas'>el equipo de Silverstone trabaja a contrareloj para mejorar un coche que a dia de hoy resta mucho de lo que fue el año pasado. <br /> En sus declaraciones el piloto asturiano ha anunciado que 
            se encuentra muy motivado y que van en buena dirección.</span>
          </p>
          <button onClick={readMore} id="botoncito" className="botonleerMas">Leer más</button>
          {/* <nav className="redes__redes" style={{ '--count': 4 }}></nav> */}
        </div>
      </section>
    </>
  )
}

export default Inicio