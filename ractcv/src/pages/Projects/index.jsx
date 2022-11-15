import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { motion } from 'framer-motion'

const Projects = () => {
  return (
   
   
    <motion.div animate={{y:100, scale:1}} initial={{scale:0}} className='container-proyect col-5'>
    

         <Card className='card' style={{ width: '18rem' }}>

      <Card.Img variant="top" src="" />
      <Card.Body className='body'>
        <Card.Title className='title'>Juego de Adivinanzas</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="group-text">
        <ListGroup.Item>Creado con HTML,Css y JavaScript</ListGroup.Item>
        <ListGroup.Item>Adivina un número entre el 1 y el 100</ListGroup.Item>
        <ListGroup.Item>Fecha 07/06/2022</ListGroup.Item>
        <Card.Link href="https://github.com/patohed/pato.github.io" className='visitar'>Visitar enlace</Card.Link>
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='title'>Carrito de Compras</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="group-text">
        <ListGroup.Item>Creado con HTML,Css, FireStore y JavaScript</ListGroup.Item>
        <ListGroup.Item>Carrito tipo E-commerce</ListGroup.Item>
        <ListGroup.Item>Fecha 07/08/2022</ListGroup.Item>
        <Card.Link href="https://github.com/patohed/patohed.github.io" className='visitar'>Visitar enlace</Card.Link>
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='title'>Porfolio HTML y CSS</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="group-text">
        <ListGroup.Item>Creado con HTML y CSS</ListGroup.Item>
        <ListGroup.Item>Primer porfolio realizado en etapa inicial</ListGroup.Item>
        <ListGroup.Item>Fecha 07/08/2022</ListGroup.Item>
        <Card.Link href="https://github.com/patohed/porfolio-" className='visitar'>Visitar enlace</Card.Link>
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='title'>Mobile Support</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="group-text">
        <ListGroup.Item>Creado con HTML, CSS y JavaScript</ListGroup.Item>
        <ListGroup.Item>Acción sobre una plantilla HTML</ListGroup.Item>
        <ListGroup.Item>Fecha 07/08/2022</ListGroup.Item>
        <Card.Link href="https://mobilesupport.com.ar/" className='visitar'>Visitar enlace</Card.Link>
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
    </motion.div>

    

   
   
  )
}

export { Projects }
