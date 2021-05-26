import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
 
const FormSelect = ({elements}) => {

     let items = [];

     elements.forEach(element => {
       
      items.push(<option> {element} </option>)

     });
    
    return (

          <Form.Group controlId="role" className="mt-3">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select">
              {items}
            </Form.Control>
          </Form.Group>

    );

  };

export default FormSelect;