import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="">
              <div className="my-links">
                <ul>
                <li>
                    <div className="list-item">
                    <Link to="https://www.linkedin.com/in/harsh-chouhan-010/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                    <Link to="https://github.com/harryupthere/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                    <Link to="https://t.me/HarryUpThere" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></Link>
                    </div>
                  </li>
                 
                </ul>
              </div>

            </Nav>
          </Container>
        </Navbar>
      </footer>
    </>
  );
}

export default Footer;