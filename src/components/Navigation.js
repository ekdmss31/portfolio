//import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  faDochub,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.title}>
          {/* <FontAwesomeIcon icon="fa-brands fa-dochub" /> */}

          <FontAwesomeIcon className={styles.faDochub} icon={faDochub} />

          <strong>AEUN</strong>
        </div>
        <ul className={styles.icon__list}>
          <li>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <FontAwesomeIcon color="#00b3ff" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon color="#ff0073" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ekdmss31" target="_blank">
              <FontAwesomeIcon color="white" icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.null}></div>
    </div>
    /*
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
    */
    // <div>
    //   <nav className={styles.navbar}>
    //     <div>Navigation</div>
    //   </nav>
    // </div>
  );
}
export default Navigation;
