import React from 'react'
import './About.css'
import { motion } from 'framer-motion'


const About = () => {


  return (
    <motion.div animate={{y: 100, scale: 1}} initial={{scale:0}} className='container-about'>
        <h4 className=''>Hola, Soy Patricio Millan.</h4>
        <p> En enero de 2022 me propuese comenzar la maraton en programación. Empecé viendo algunos videos tutoriales en YouTube, y al tiempo, con algunas herramientas, muchas ganas y curiosidad ayude a un amigo a desarrollar la web para su negocio (Mobile Support).<br></br>
         <br></br>Interesado en aprender más sobre desarrollo decidí acceder a los cursos en <span> UTN </span>aprendiendo a manejar herramientas como:<span className='span1' > "HTML,CSS,FIREBASE,BOOTSTRAP 5 y JavaScript"</span>.<br></br> 
        <br></br>
        En esta primera etapa adquiri nuevos conceptos sobre: <span className='span1'>estilos, animaciones, estructura, funcionalidad, frameworks y  base de datos</span>. Fortaliciendo aun más mi base en torno al desarrollo web. 
        <br></br>
        <br></br>
        En esta ultima etapa del año ya en la diplomatura de desarrollo Web avanzado adquirí conocimiento sobre nuevas herramientas como: <span className='span1'> "React , NodeJS, Typescript, Material UI."</span></p>

      <a href='#info' className='btnInfo'>+info</a>
        

    </motion.div>
  )
}

export { About }
