import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Spinner} from "react-bootstrap";
import {useHistory} from "react-router-dom";

// Import Components
import FormElement from "./CFormElement";
import FormSelect from "./CFormSelect";
import FormRadio from "./CFormRadio";
 
const CForm = () => {

  const history = useHistory();
  const roleElements = ["Enseignant", "Chercheur", "Doctorat", "Etudiant"];
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];
  const [loading, setLoading] = useState(false);
  
    const search = () => {

      setLoading(true);
      let url = 'https://webservices.utc.fr/api/v1/trombi/gi';

      let username = 'wsuser';
      let password = 'v3Kenobi!';

      let headers = new Headers();

      headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

      fetch(url, {method:'GET',
              headers: headers,

            })
      .then(response => {
        

        response.json();
      
      })
      .then(json => {
        
        history.push("/ListPage");
        console.log(json);
      
      });

    };

    return (

      <Form>
            <FormElement labelName="Nom" />

            <FormElement labelName="Prenom" />

            <FormSelect elements={roleElements} />

            <br /> <br />

            <FormRadio places={places} />

            <div className="text-center mt-2"> 

               <Button onClick={search} variant="outline-success" size="lg" >Search</Button> <br /> <br />
                {!loading ? true : <Spinner animation="border" variant="warning" />}
            
            </div>

            

      </Form>

    );

  };

export default CForm;