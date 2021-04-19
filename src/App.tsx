import Contador from './components/Contador'
import ContadorConHook from './components/ContadorConHook'
import { Funciones } from './typescript/Funciones'
import ObjetosLiterales from './typescript/ObjetosLiterales'
import TiposBasicos from './typescript/TiposBasicos'
import { Login } from './components/Login';
import { Usuario } from './components/Usuario';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
      <br />
      <h1>Hooks con TypeScript</h1>
      <hr />
      <Contador />
      <hr />
      <ContadorConHook />
      <hr />
      <Login />
      <hr />
      <Usuario />
    </div>
  )
}

export default App
