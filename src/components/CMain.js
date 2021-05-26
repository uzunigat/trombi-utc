import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

// Import Components
import CForm from "./formComponents/CForm"

const CMain = () => {

    return (

        <Container className="my-5">

            <CForm />

         </Container>

    );

  };

export default CMain;