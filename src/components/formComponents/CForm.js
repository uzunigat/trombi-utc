import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom'


// Import Components
import FormElement from "./CFormElement";
import FormSelect from "./CFormSelect";
import FormRadio from "./CFormRadio";
 
const CForm = () => {

  const history = useHistory();
  const roleElements = ["Enseignant", "Chercheur", "Doctorat", "Etudiant"];
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];

  
    const search = () => {

      history.push(`/ListPage`);
   
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
            
            </div>

            

      </Form>

    );

  };

export default CForm;