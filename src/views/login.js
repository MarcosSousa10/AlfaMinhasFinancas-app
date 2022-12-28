import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { Link } from "react-router-dom";
import { mensagemErro } from "../components/toastr";
//import axios from "axios";
import UsuarioSerivice from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localStorageService";
class Login extends React.Component{
    state = {
        email:"",
        senha:""
    }
    constructor(){
        super();
        this.service = new UsuarioSerivice();
    }
    entrar=()=>{
        this.service.autenticar({
            email:this.state.email,
            senha:this.state.senha
        }).then(response =>{
            LocalStorageService.adicionarItem('_usuario_logado', response.data)
            //pode aver erro
            this.props.history.push('/home') 
        }).catch(erro=>{
          mensagemErro(erro.response.data)
        });
        
    }
    render(){
        return(
            <div className="conteiner">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left:'300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup Label="Email: *"  htmlFor="exampleInputEmail1">
                                                    <input type="email"  onChange={e => this.setState({email: e.target.value})}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"/>
                                                </FormGroup>
                                                <FormGroup Label="Senha: *" value={this.state.senha} htmlFor="exampleInputPassword1">
                                                    <input type="password"onChange={e => this.setState({senha: e.target.value})}  className="form-control" id="exampleInputPassword1"  placeholder="Password"/>
                                                </FormGroup><br/>
                                                <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                                <button  className="btn btn-danger"><Link to={'/cadastro-usuarios'} >Cadastrar</Link> </button>
                                            </fieldset>
                                        </div>
                                    </div>                                    
                                </div>
                            </Card>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;