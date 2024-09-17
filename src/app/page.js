"use client"
import { Container, Nav, Navbar, Conteiner} from "react-bootstrap";


export default function Home(props) {
  return (
    <>
       <Navbar bg="light" >
        <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/linkUsuario/Usuario">Lista de usuario</Nav.Link>
          <Nav.Link href="/linkDetalhes/Detalhes">Detalhes do usuario</Nav.Link>
        </Nav>

        </Container>
            <div>
              <h1 className={props.titulo}></h1>
            </div>
            <Conteiner>
              {props.children}
            </Conteiner>
        </Navbar>
          </>

          );
}
