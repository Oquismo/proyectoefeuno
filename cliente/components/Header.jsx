import React from 'react'
import logo from '../img/logo hd.png'


function Header() {
  return (
    <>
      <header>
<div className="header">

<img src={logo} className="logo" alt="f1 logo"/>
<ul class="lista">
    <li class="elemento__lista">Contacto</li>
    <li class="elemento__lista">Horarios</li>
    <a href='./merchan.html' target="_blank"><li class="elemento__lista">Merchandising</li></a>
</ul>
    <form action="0" method="get" class="elemento__lista">
        <input type="text" name="nombre" id="nom" class="header_input" placeholder="Buscar"/>
    </form> 




  
</div>






      </header>
    </>
  )
}

export default Header
