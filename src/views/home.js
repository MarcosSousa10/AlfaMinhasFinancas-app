import React from "react";
class Home extends React.Component{
    state={
        saldo:0
    }
render(){
    return(
        <div className="container">      
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finaças.</p>
                <p className="lead">Seu saldo para o mês atual é de R${this.state.saldo}</p>
                <hr className="my-4"/>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/cadastro-usuarios" role='button'><i className="fa fa-users">Cadastrar Usuario</i></a>
                    <a className="btn btn-danger btn-lg" href="" role='button'><i className="fa fa-users">Cadastrar Lancamento</i></a>
                </p>
            </div>
        </div>
    )
}
}
export default Home;