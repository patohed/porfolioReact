import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './Modal.css'




function Modales () {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


return (
    <div>
      <Button className="launch" variant="primary" onClick={handleShow}>
        
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Certificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Front End Developer UTN nival incial.
        <Button className="imagen"></Button></Modal.Body>
        <Modal.Footer>
          <Button className="close" variant="secondary" onClick={handleClose}>
            Close
        </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    
);
}


export { Modales }



