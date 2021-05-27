import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userData from './userDataExample';
import { Button } from "react-bootstrap";
import CModalUserInfo from './components/Modals/CModal-Ind-Inf';
import CModalQR from './components/Modals/qr-modal';

const TestComponent = () => {
  

  const [modalShow, setModalShow] = React.useState(false);
  const [modalEmailShow, setModalEmailShow] = React.useState(false);
  const [modalPhoneShow, setModalPhoneShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Show user information
      </Button>

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

export default TestComponent;
