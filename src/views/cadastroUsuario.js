import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { Link } from "react-router-dom";
import UsuarioSerivice from "../app/service/usuarioService";
import { mensagemSucesso,mensagemErro } from "../components/toastr";
class CadastroUsuario extends React.Component{
    state={
        nome:"",email:"",senha:"",senhaRepeticao:""
    }
    cadastrar=()=>{
        const msgs = this.validar();
        if(msgs && msgs.length>0){
            msgs.forEach((msg, index)=>{
                mensagemErro(msg)
            });
            return false;
        }
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
       this.service.salvar(usuario)
       .then(response =>{
        mensagemSucesso('Usuario cadastrado com sucesso! Faça o login para acessar o  sistema');
     //pode dar erro
        this.props.history.push('/login')
    }).catch(erro =>{
        mensagemErro(erro.response.data)
    })
    }
    constructor(){
        super();
        this.service = new UsuarioSerivice();
    }
    validar(){
        const msgs=[]
        if(!this.state.nome){
            msgs.push('o campo Nome e obrigatorio.')
        }
        if(!this.state.email){
            msgs.push('O campo Email é obrigatorio.')
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('O campo Email valido.')
        }
         if(!this.state.senha||!this.state.senhaRepeticao){
            msgs.push('o campo Senha e ou senha oubrigatorios.')
        }else if(this.state.senha !== this.state.senhaRepeticao){
            msgs.push('As senhas não batem.')
        }

        return msgs;
    }
  
render(){
    return(
        <div className="container">
            <Card title="Cadastro de Usuarios">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome *" htmlFor='inputNome'>
                                <input type="text" className="form-control" id="inputNome" name="nome" onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Email *" htmlFor='inputEmail'>
                                <input type="email" className="form-control" id="inputEmail" name="email" onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha *" htmlFor='inputSenha'>
                                <input type="password" className="form-control" id="inputSenha" name="senha" onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Repita a Senha *" htmlFor='inputRepitaSenha'>
                                <input type="password" className="form-control" id="inputRepitaSenha" name="senha" onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                            </FormGroup><br/>
                            <button type="button" onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                            <button type="button" className="btn btn-danger"><Link to={'/login'} >Cancelar</Link></button>
                        </div>
                    </div>
                </div>
            </Card>  
        </div>
        
    )

}
}
export default CadastroUsuario