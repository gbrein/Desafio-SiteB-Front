import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavB from './Components/Nav'
import ListaDominios from './Components/ListaDominios'
import Home from './Components/Home'

class App extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    handleUpdate(value, id) {
        let newBaseForm = this.state.baseForm
        if (newBaseForm[id] === undefined) {
            newBaseForm[id] = value
        } else {
            newBaseForm[id] += value;
        }
       return this.setState({baseForm: newBaseForm})
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
                        { ()=> <Home action={this.handleUpdate} baseForm={this.state.baseForm} />}/>
                    <Route path='/ListaDominios' component={ListaDominios}/>
                </Switch>
            </div>
        )
    }
}

export default App;
