// Importing combination
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
 
const FormElement = (props) => {
    
    return (
      <>
        <Form.Group {...props} controlId={props.labelName} className="mt-3">
            <Form.Label > {props.labelName} </Form.Label>
            <Form.Control type="text" placeholder={props.labelName} onChange={props.control}/>
          </Form.Group>
      </>
    );

  };

export default FormElement;