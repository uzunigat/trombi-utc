import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
 
const FormSelect = (props) => {

     let items = [];

     props.elements.forEach(element => {
       
      items.push(<option> {element} </option>)

     });
    
    return (

          <Form.Group {...props} controlId="role" className="mt-3">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" onChange={props.control}>
              {items}
            </Form.Control>
          </Form.Group>

    );

  };

export default FormSelect;