import { Route, Routes,BrowserRouter } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Navbar from '../components/navbar';   
import Home from "../views/home";                                                                                  
function Rotas(){
return(
<BrowserRouter >
        <Navbar/>
        <Routes>
        <Route path = '/home' element={ <Home/>}/> 
        <Route path = '/login' element={ <Login/>}/> 
        <Route path = '/cadastro-usuarios'  element={<CadastroUsuario/>}/>
        
        </Routes>
        
        </BrowserRouter> 
)
}
export default Rotas;