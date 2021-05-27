import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

// Import Components

 
const CUserCard = ({userData}) => {

    return(

        <Card border="warning" bg="light" style={{ width: '12rem' }} className="my-2">
        <Card.Img variant="top" src={"data:image/jpg;base64,"+userData.photo} />
        <Card.Body>
            <Card.Title>{userData.nomp}</Card.Title>
            <Button variant="primary">More ...</Button>
        </Card.Body>
        </Card>
        
    );

  };

export default CUserCard;