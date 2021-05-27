import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

// Import Components
import FormElement from "./CFormElement";
import FormSelect from "./CFormSelect";
import FormRadio from "./CFormRadio";
 
const CForm = () => {

  const history = useHistory();
  const roleElements = ["Enseignant", "Chercheur", "Doctorat", "Etudiant"];
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("Enseignant");
  const [laboratoire, setLaboratoire] = useState("All");
  
    const search = () => {

      history.push(`/ListPage`);
   
    };

    function changeLastName(evt){

      setLastName(evt.target.value);

    }

    function changeFirstName(evt){

      setFirstName(evt.target.value);

    }

    function changeRole(evt){

      console.log("change Role function!!!");
      setRole(evt.target.value);

    }

    return (

      <Form>
            <FormElement labelName="Nom" lastName={lastName} control={changeLastName.bind(this)}/>

            <FormElement labelName="Prenom" firstName={firstName} control={() => changeFirstName.bind(this)}/>

            <FormSelect elements={roleElements} control={() => changeRole.bind(this)}/>

            {console.log(role)}

            <br /> <br />

            <FormRadio places={places} />

            <div className="text-center mt-2"> 

               <Button onClick={search} variant="outline-success" size="lg" >Search</Button> <br /> <br />
            
            </div>

            

      </Form>

    );

  };

export default CForm;