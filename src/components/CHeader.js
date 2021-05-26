import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from "react-bootstrap";

// Import Components
import logo from "../utc.svg";

const CHeader = () => {

    return (

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

    );

  };

export default CHeader;