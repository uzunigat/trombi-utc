// Import Components
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import {Spinner} from "react-bootstrap";

function CListPage() {

  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState(null);
  let users = [];

  // This function fill all the users state
  function fillUsers(elements) {

    elements.forEach((element, index) => {
    
      users.push(element.nomp);

    });

    setElements(users);
    setLoading(false);

  }

  // Call Before Mount
  useEffect(() => {

      let url = 'https://webservices.utc.fr/api/v1/trombi/gi';

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
        
        <ul>
        {elements.map(element => (
          <li>{element}</li>
        ))}
      </ul>
        
        : <Spinner animation="border" variant="warning" />} 

    </div>
  );
}

export default CListPage;
