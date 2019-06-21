import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavB from './Components/Nav'
import ListaDominios from './Components/ListaDominios'
import Home from './Components/Home'

function App() {
    return (
        <div className="App">
            <NavB/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/ListaDominios' component={ListaDominios}/>
            </Switch>
        </div>
    );
}

export default App;
