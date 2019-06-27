import React, {Component} from 'react';

class ListaDominios extends Component {
    componentDidMount() {
        const {functionList} = this.props;
        functionList();
    }

    render() {
        const {list} = this.props;
        console.log(list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Endereco</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Dominios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(list)
                            ? list.map(element => {
                                return (
                                    <tr>
                                    <th>{element.nome}</th>
                                    <th>{element.cpf}</th>
                                    <th>{element.endereco}</th>
                                    <th>{element.telefone}</th>
                                    <th>{element.email}</th>
                                    <th>{element.dominios}</th>
                                    </tr>
                                )
                            })
                            : false}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListaDominios;
