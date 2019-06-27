import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import checkCPF from '../checkCPF'
import checkPhone from '../checkPhone'

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this
            .handleOnChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleSubmitFail = this
            .handleSubmitFail
            .bind(this);
    }

    handleOnChange(event) {
        const {action} = this.props;
        const value = event.target.value;
        const id = event.target.id;
        action(value, id)
    }

    handleSubmit(event) {
        const {actionSend} = this.props;
        event.preventDefault();
        actionSend();
    }

    handleSubmitFail(event, validaCPF, validaPhone) {
        event.preventDefault();
        // eslint-disable-next-line no-unused-expressions
        if (validaCPF === false) {
            alert('CPF Invalido');
        }
        if (validaPhone === false) {
            alert('Telefone Invalido');
        }
    }

    render() {
        const {baseForm} = this.props;
        let validaCPF = checkCPF(baseForm.cpf)
        let validaPhone = checkPhone(baseForm.telefone)
        let {checkSucess} = this.props;
        if (checkSucess==false){
        return (
            <div className="divForm">
                <Form
                    enctype="application/json"
                    onSubmit=
                    { (validaCPF)&&(validaPhone) ? (event) => this.handleSubmit(event) : (event)=> this.handleSubmitFail(event, validaCPF, validaPhone)}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                defaultValue={baseForm.nome}
                                onChange={this.handleOnChange}
                                required/>
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
                            <Form.Control
                                defaultValue={baseForm.cpf}
                                onChange={this.handleOnChange}
                                required/>
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
                            <Form.Label>Telefone (Sem Traços ou caracteres especiais)</Form.Label>
                            <Form.Control
                                placeholder="XXXXXXXXXXX"
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
        )}
        else{
            return(
        <Redirect to='/Sucess' />
            )
        }
    }
}

export default Home;