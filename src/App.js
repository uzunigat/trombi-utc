import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "react-bootstrap";

// Import Components
import CForm from "./components/formComponents/CForm";
import CHeader from "./components/CHeader"
import CMain from "./components/CMain";

function App() {

  return (
    <div className="App">
      <CHeader />
      <CMain />

    </div>
  );
}

export default App;
