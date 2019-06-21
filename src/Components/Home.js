import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FormClient from './FormClient'

class Home extends Component {
    render() {
        return (
            <div>
                <FormClient/>
            </div>
        )
    }
}

export default Home;