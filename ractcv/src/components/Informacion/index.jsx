import  React, { useState } from "react";
import "./Informacion.css";
import { Modales } from "../Modal"
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { ImOffice } from "react-icons/im";
import { BiMessage } from "react-icons/bi";
import { FaRegEnvelope, FaUserGraduate } from "react-icons/fa";

function Informacion() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
  return (
    <div className="tabla col-md-3" id="info">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" placeholder="city"> <ImOffice /></th>
            <th scope="col"> Olivos, Buenos Aires, Argentina.</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col"><BiMessage /></th>
            <th scope="col"> Spanish </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Lengague #2:</th>
            <th>English</th>
          </tr>
          <tr>
            <th scope="row"><FaRegEnvelope /></th>
            <th>millanpatricio@hotmail.com</th>
          </tr>
          <tr>
            <th scope="row"><FaUserGraduate /></th>
            <th><Button className="launch" variant="primary" onClick={handleShow}>
              Ver
            </Button>

            <Modal className="modal" show={show} onHide={handleClose}>
              <Modal.Header className="header">
                <Modal.Title>Certificación</Modal.Title>
                Front End Developer UTN - Inicial
              </Modal.Header>
            <Modal.Body className="imgContainer">
                 <Button className="imagen"></Button>
            </Modal.Body>
              <Modal.Footer>
                <Button
                  className="close"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
           </th> 
          </tr>
        </tbody>
      </table>
      
      <br></br>
    </div>
  );
}

export { Informacion };
