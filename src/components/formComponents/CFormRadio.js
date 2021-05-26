import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
 
const FormRadio = ({places}) => {
    
    return (

        <Form.Group className="d-flex justify-content-center mt-3">
            <Form.Label> Laboratoire </Form.Label>
            <>
              {places.map((place) => (
                <Form.Check
                  inline
                  label={place}
                  name="group1"
                  type="radio"
                />
              ))}
            </>
          </Form.Group>

    );

  };

export default FormRadio;