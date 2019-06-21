import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this
            .handleOnChange
            .bind(this);
    }

    handleOnChange(event) {
        const {action} = this.props;
        const value = event.target.value;
        const id = event.target.id;
        action(value, id)
    }

    render() {
        const {baseForm} = this.props;
        return (
            <div className="divForm">
                <Form onSubmit= {e => this.handleSubmit(e)}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control defaultValue={baseForm.nome} onChange={this.handleOnChange} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="endereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={baseForm.endereco}
                                onChange={this.handleOnChange}
                                placeholder="Rua ...."
                                required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control defaultValue={baseForm.cpf} onChange={this.handleOnChange} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={baseForm.email}
                                onChange={this.handleOnChange}
                                placeholder="Enter email"
                                required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                placeholder="XX-XXXXX-XXXX"
                                onChange={this.handleOnChange}
                                defaultValue={baseForm.telefone}
                                required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="dominios">
                            <Form.Label>Dominios</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={this.handleOnChange}
                                placeholder="Separados por Virgula"
                                defaultValue={baseForm.dominios}
                                required/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>

                </Form>
            </div>
        )
    }
}

export default Home;