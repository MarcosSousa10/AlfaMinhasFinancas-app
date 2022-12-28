import { Route, Routes,BrowserRouter } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from '../components/navbar';   
import Home from "../views/home";   
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos"; 
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";                                                                             
function Rotas(){
return(
<BrowserRouter >
        <Navbar/>
        <Routes>
        <Route path = '/home' element={ <Home/>}/> 
        <Route path = '/login' element={ <Login/>}/> 
        <Route path = '/cadastro-usuarios'  element={<CadastroUsuario/>}/>
        <Route path = '/cunsulta-lancamentos'  element={<ConsultaLancamentos/>}/>
        <Route path = '/cadastro-lancamentos'  element={<CadastroLancamentos/>}/>
        </Routes>
        
        </BrowserRouter> 
)
}
export default Rotas;