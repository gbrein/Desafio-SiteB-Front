import React, {Component} from 'react'
import {Form, Button, Col} from 'react-bootstrap';

class FormClient extends Component {
    render() {
        return (
            <div className="divForm">
                <Form onSubmit= {e => this.handleSubmit(e)}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAdress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Rua ...." required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCPF">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTel">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control placeholder="XX-XXXXX-XXXX" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridDomainList">
                            <Form.Label>Dominios</Form.Label>
                            <Form.Control type="text" placeholder="Separados por Virgula" required />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>

                </Form>
            </div>
        );
    }
}

export default FormClient;