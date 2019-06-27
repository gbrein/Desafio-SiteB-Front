import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavB from './Components/Nav';
import ListaDominios from './Components/ListaDominios';
import Home from './Components/Home';
import axios from 'axios';
import Sucess from './Components/Sucess'

const http = axios.create({baseURL: 'http://127.0.0.1:3001'})

class App extends Component {
    constructor() {
        super();
        this.state = {
            checkSucess: false,
            listaDominios: '',
            baseForm: {
                nome: '',
                endereco: '',
                cpf: '',
                email: '',
                telefone: '',
                dominios: ''
            }
        }
        this.handleUpdate = this
            .handleUpdate
            .bind(this);
        this.handleSend = this
            .handleSend
            .bind(this);
        this.handleList = this
            .handleList
            .bind(this);
    }

    handleUpdate(value, id) {
        let newBaseForm = this.state.baseForm
        if (newBaseForm[id] === undefined) {
            newBaseForm[id] = value
        } else {
            newBaseForm[id] = value;
        }
        return this.setState({baseForm: newBaseForm})
    }

    handleSend() {
        const myState = this.state.baseForm
        http
            .post('/post', myState)
            .then(response => {
                if (response.status === 200) {
                    return this.setState({checkSucess:true})
                } else {
                    return false
                }
            })
    }

    handleList() {
        http
            .get('/get')
            .then(response => this.setState({listaDominios: response.data}))
    }

    render() {
        return (
            <div className="App">
                <NavB/>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render=
                        { ()=> <Home action={this.handleUpdate} checkSucess={this.state.checkSucess} actionSend={this.handleSend} baseForm={this.state.baseForm} />}/>
                    <Route
                        path='/ListaDominios'
                        render=
                        { ()=> <ListaDominios list={this.state.listaDominios} functionList={this.handleList}/>}/>
                    <Route patch='/Sucess' component={Sucess} />
                </Switch>
            </div>
        )
    }
}

export default App;
