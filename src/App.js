import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Navbar } from "react-bootstrap";
import logo from "./utc.svg";
function App() {
  const typeElement = "radio";
  const places = ["All", "Laboratoire Heudiasyc", "Laboratoire LMAC"];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Trombi GI
        </Navbar.Brand>
      </Navbar>

      <Container>
        <Form>
          <Form.Group controlId="nom">
            <Form.Label>Nom </Form.Label>
            <Form.Control type="text" placeholder="Nom" />
          </Form.Group>
          <Form.Group controlId="prenom">
            <Form.Label>Prenom </Form.Label>
            <Form.Control type="text" placeholder="Prenom" />
          </Form.Group>
          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select">
              <option> Enseignant </option>
              <option>Chercheur</option>
              <option>Doctorant </option>
              <option>Etudiant</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Laboratoire </Form.Label>
            <>
              {places.map((place) => (
                <Form.Check
                  inline
                  label={place}
                  name="group1"
                  type={typeElement}
                />
              ))}
            </>
          </Form.Group>

          <Button variant="success">Search</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
