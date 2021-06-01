import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Col, Row, Image, Container } from "react-bootstrap";


const ModalUserInf = (props) => {
  // const [modalEmailShow, setModalEmailShow] = React.useState(false);
  // const [modalPhoneShow, setModalPhoneShow] = React.useState(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" >
            <div className="text-center">Informations generales</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col align="center">
                <Image
                  src={`data:image/jpg;base64,${props.userInfo.photo}`}
                  roundedCircle
                />
              </Col>
              <Col>
              <Container>
              <Row><Col >Email</Col><Col  >{props.userInfo.mail}</Col></Row>
              <Row><Col >Nom ,Prenom</Col><Col align="center">{props.userInfo.nomp}</Col></Row>
              <Row><Col >Structure</Col><Col align="center">{props.userInfo.structureLibelle}</Col></Row>
              <Row><Col >Laboratoire structure</Col><Col align="center">{props.userInfo.structLibelleFils}</Col></Row>
              <Row><Col >Numb. Telephone post 1</Col><Col align="center">{props.userInfo.telPoste1}</Col></Row>
              <Row><Col >Numb. Telephone post 1</Col><Col align="center">{props.userInfo.telPoste2}</Col></Row>
              <Row><Col >Mamada foto</Col><Col align="center">{props.userInfo.trombiDiffuserPhoto$f}</Col></Row>
              <Row><Col >Bureau </Col><Col align="center">{props.userInfo.loca}</Col></Row>
              <Row><Col >Login</Col><Col align="center">{props.userInfo.login}</Col></Row>
              <Row><Col >Branche</Col><Col align="center">{props.userInfo.structureAbr}</Col></Row>
              <Row><Col >Bureau laboratoire</Col><Col align="center">{props.userInfo.structAbrFils}</Col></Row>
              <Row><Col >Fonction</Col><Col align="center">{props.userInfo.fonction}</Col></Row>
              </Container>

                <Row>
                  <Col>
                    <Button variant="dark" onClick={() =>{
                      props.onShowModalQrPhone()
                      props.onHide()
                    }}> Generate QR Phone</Button>
                  </Col>
                  <Col>
                    <Button variant="dark" onClick={() =>{
                      props.onShowQrEmail()
                      props.onHide()
                    } 
                    }> Generate QR Email</Button>                  
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUserInf;
