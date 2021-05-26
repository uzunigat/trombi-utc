import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button} from "react-bootstrap";

// Import Components
import FormElement from "./CFormElement";
import FormSelect from "./CFormSelect";
import FormRadio from "./CFormRadio";
 
const CForm = () => {

  const roleElements = ["Enseignant", "Chercheur", "Doctorat", "Etudiant"];
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];
    
    return (

      <Form>

            <FormElement labelName="Nom" />

            <FormElement labelName="Prenom" />

            <FormSelect elements={roleElements} />

            <FormRadio places={places} />

            <Button variant="success" className="d-flex justify-content-center mt-3" >Search</Button>

      </Form>

    );

  };

export default CForm;