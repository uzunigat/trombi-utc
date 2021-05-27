import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal} from "react-bootstrap";

const ModalUserInf = (props)=>{
    return (
        <>
<Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Informations general
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aqui deberemos poner todas las informaciones que sean relacionadas al usuario */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    );
}