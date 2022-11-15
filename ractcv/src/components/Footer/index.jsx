import  React from 'react';
import './ppp.css';
import "bootstrap/dist/css/bootstrap.min.css";


function PieDePagina () {
    return (
        <footer className='footer col-12'>
        <div className='cont'>
            <a href='#form'>Contacto</a>
            <a href='#info'>Información personal</a>
            <a href='#progress'>Skills</a>
        </div>
        <div>
            <p>All rights reserved PatricioMillan @2022</p>
        </div>
        </footer>

    )
}

export { PieDePagina }