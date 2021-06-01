import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container, Row} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

// Import Components

 
const CForm = () => {

  let items = [];

  const history = useHistory();
  const roleElements = ["Enseignant", "Chercheur", "Doctorant"];
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("Enseignant");
  const [laboratoire, setLaboratoire] = useState("All");

  roleElements.forEach(element => {
       
    items.push(<option> {element} </option>)

   });
  
    const search = () => {

      history.push({
        pathname: `/ListPage`,
        state: {

          firstName,
          lastName,
          role,
          laboratoire

        }

      });
   
    };

    function changeLastName(evt){

      setLastName(evt.target.value);

    }

    function changeFirstName(evt){

      setFirstName(evt.target.value);

    }

    function changeRole(evt){

      setRole(evt.target.value);

    }

    function changeLaboratoire(evt){

      setLaboratoire(evt.target.value);

    }

    return (

      <Form>

          <Form.Group controlId="name" className="mt-3">
            <Form.Label > Nom </Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={changeLastName}/>
          </Form.Group>


          <Form.Group controlId="prenom" className="mt-3">
            <Form.Label > Prenom </Form.Label>
            <Form.Control type="text" placeholder="Prenom" onChange={changeFirstName}/>
          </Form.Group>

            <Form.Group controlId="role" className="mt-3">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" onChange={changeRole}>
                {items}
              </Form.Control>
            </Form.Group>

            <br /> <br />


            <Form.Group className="d-flex justify-content-center mt-3" >

            <Container className="text-center mb-2">

              <Row>
                <Form.Label> Laboratoire </Form.Label>
              </Row>


                {places.map((place) => (
                  <Form.Check onClick={changeLaboratoire}
                    inline
                    label={place}
                    value={place}
                    name="group1"
                    type="radio"
                  />
                ))}
        
          </Container>

          </Form.Group>

          {console.log(laboratoire)}

            <div className="text-center mt-2"> 

               <Button onClick={search} variant="outline-success" size="lg" >Search</Button> <br /> <br />
            
            </div>

            

      </Form>

    );

  };

export default CForm;