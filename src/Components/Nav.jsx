import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

function NavB() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src="/logo-site-blindado.svg"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/ListaDominios">Lista de Dominios</Nav.Link>
                    <Nav.Link href="#"><img src="/ic_phone.svg"/></Nav.Link>
                    <Nav.Link className="text-client">Seja cliente Site Blindado</Nav.Link>
                    <Nav.Link className="text-client">4003-2122</Nav.Link>
                </Nav>

                <div>
                    <Nav className="mr-auto">
                        <Nav.Link href="#"><img src="/ic_chat.svg"/></Nav.Link>
                        <Nav.Link href="https://siteblindado.zendesk.com/hc/pt-br">Central de Ajuda</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavB