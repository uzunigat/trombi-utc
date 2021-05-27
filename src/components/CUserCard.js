import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Card, Button} from "react-bootstrap";
import CModalUserInfo from './Modals/CModal-Ind-Inf';
import CModalQR from './Modals/qr-modal';

// Import Components

 
const CUserCard = ({userData}) => {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalEmailShow, setModalEmailShow] = React.useState(false);
    const [modalPhoneShow, setModalPhoneShow] = React.useState(false);

    return(
<>
        <Card border="warning" bg="light" style={{ width: '12rem' }} className="my-2">
        <Card.Img variant="top" src={"data:image/jpg;base64,"+userData.photo} />
        <Card.Body>
            <Card.Title>{userData.nomp}</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>More ...</Button>
        </Card.Body>
        </Card>

        <CModalUserInfo
        show={modalShow}
        onHide={() => setModalShow(false)}
        showInfoModal={()=>setModalShow(true)}
        userInfo = {userData}
        onShowModalQrPhone={() => setModalPhoneShow(true)}
        onShowQrEmail={() => setModalEmailShow(true)}
        />

        <CModalQR
        show={modalPhoneShow}
        qrValue ={`034423${userData.telPoste1}`}
        title="Scanner pour appeler"
        onHide={() => setModalPhoneShow(false)}
        showPrincipalModal = {()=>setModalShow(true)}

        />
        <CModalQR
        show={modalEmailShow}
        qrValue ={userData.mail}
        title="Scanner pour envoyer un mail"
        showPrincipalModal = {()=>setModalShow(true)}
        onHide={() => setModalEmailShow(false)}

        />
        </>
    );

  };

export default CUserCard;