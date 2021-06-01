// Import Components
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import {Spinner, Container, Row, Col} from "react-bootstrap";
import CUserCard from "./CUserCard";
import { useLocation } from 'react-router-dom';


const CListPage = (props) => {

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState(null);
  let users = [];

  // This function fill all the users state
  function fillUsers(elements) {

    elements.forEach((element, index) => {
    
      users.push(element);
      console.log(element);

    });

    setElements(users);
    setLoading(false);

  }

  function makeURL(data){

    let url = 'https://webservices.utc.fr/api/v1/trombi/gi';

    if(data.firstName != "" && data.lastName != "") {
      url += "?name="+data.lastName.toLowerCase() + "&firstname=" + data.firstName.toLowerCase();  
    } else if (data.firstName != "" && data.lastName === ""){
      url += "?firstname="+data.firstName.toLowerCase();
    } else if (data.firstName === "" && data.lastName != ""){
      url += "?name="+data.lastName.toLowerCase();
    }

    return url;

  }

  // Call Before Mount
  useEffect(() => {

      let url = makeURL(location.state);

      let username = 'wsuser';
      let password = 'v3Kenobi!';

      let headers = new Headers();

      headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

      fetch(url, {method:'GET',
              headers: headers,})

      .then(function(response) {
        
        response.json().then(function(json){

          fillUsers(json);

        }).catch (e => {console.log(e)})

      }).catch (e => {console.log(e)})

  }, []);

  return (
    <div className="text-center">

        <br/>

        {/* When is loading we show the loading icon */}
        {!loading ? 
        
        <Container>

          <Row>
          {elements.map(element => (
            <Col> <CUserCard className="font-weight-bold" userData={element}/></Col>
          ))}
          </Row>
        </Container>
        
        : <Spinner animation="border" variant="warning" />} 

    </div>
  );
}

export default CListPage;
