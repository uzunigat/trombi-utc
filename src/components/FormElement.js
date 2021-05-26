// Importing combination
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
 
const FormElement = ({labelName}) => {
    
    return (

        <Form.Group controlId={labelName} className="mt-3">
            <Form.Label> {labelName} </Form.Label>
            <Form.Control type="text" placeholder={labelName} />
          </Form.Group>

    );

  };

export default FormElement;