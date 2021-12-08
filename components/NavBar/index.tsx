import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

const HomeNavbar = () => {
    return (
        <>
            <Container>
                <Navbar bg="ligth">
                    <Container>
                        <Navbar.Brand>Brand</Navbar.Brand>
                        <Nav>
                            <Nav.Link>Projetos</Nav.Link>
                            <Nav.Link>Sobre</Nav.Link>
                            <Nav.Link>Não sei</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export { HomeNavbar };