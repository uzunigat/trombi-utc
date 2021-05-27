import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal,Container,Button} from "react-bootstrap";
var QRCode = require('qrcode.react');

const QrModal = (props)=>{
    return (
        <>

<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
      <QRCode value={props.qrValue} includeMargin={true}/>
      </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
          props.showPrincipalModal()
        props.onHide()}}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    );
}



export default QrModal;