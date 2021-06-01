import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Col, Row, Image, Container } from "react-bootstrap";


const ModalUserInf = (props) => {

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
              <Col className="my-auto" lg="4">
                <Image
                  src={`data:image/jpg;base64,${props.userInfo.photo}`}
                  fluid 
                  roundedCircle
                />
              </Col>
              <Col>
              <Container>
                <Row className="mt-1"><Col >Email: </Col><Col >{props.userInfo.mail}</Col></Row>
                <Row className="mt-1"><Col >NOM , Prenom: </Col><Col >{props.userInfo.nomp}</Col></Row>
                <hr />
                <Row className="mt-1"><Col >Structure: </Col><Col >{props.userInfo.structureLibelle}</Col></Row>
                <Row className="mt-1"><Col >Laboratoire structure: </Col><Col >{props.userInfo.structLibelleFils}</Col></Row>
                <hr />
                <Row className="mt-1"><Col >Numb. Telephone post 1: </Col><Col >{props.userInfo.telPoste1}</Col></Row>
                <Row className="mt-1"><Col >Numb. Telephone post 2: </Col><Col >{props.userInfo.telPoste2}</Col></Row>
                <hr />
                <Row className="mt-1"><Col >Bureau:  </Col><Col >{props.userInfo.loca}</Col></Row>
                <Row className="mt-1"><Col >Login: </Col><Col >{props.userInfo.login}</Col></Row>
                <Row className="mt-1"><Col >Branche: </Col><Col >{props.userInfo.structureAbr}</Col></Row>
                <Row className="mt-1"><Col >Bureau laboratoire: </Col><Col >{props.userInfo.structAbrFils}</Col></Row>
                <Row className="mt-1"><Col >Fonction: </Col><Col >{props.userInfo.fonction}</Col></Row>
              </Container>

                <Row>
                  <Col className="mt-5 text-center">
                    <Button variant="dark" onClick={() =>{
                      props.onShowModalQrPhone()
                      props.onHide()
                    }}> Generate QR Phone</Button>
                  </Col>
                  <Col  className="mt-5 text-center">
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
