import React from 'react' 
import './Navegacion.css'
import { Link } from 'react-router-dom'
import { BiHeart } from "react-icons/bi"

import { useState } from 'react';




function Barra () {
    return (
        <div className='container-barra col-11'>
           <Link className='heart col-sm-1' id='heart'><BiHeart/></Link>


           <Link to="/">Home</Link>
           <Link to="/contact">Contacto</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">Projects</Link>
           
           
           
        </div>
    )
}

export { Barra }