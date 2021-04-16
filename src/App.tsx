import Contador from './components/Contador'
import { Funciones } from './typescript/Funciones'
import ObjetosLiterales from './typescript/ObjetosLiterales'
import TiposBasicos from './typescript/TiposBasicos'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript</h1>
      <hr/>
      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr/>
      <Funciones />
      <br/>
      <h1>Hooks con TypeScript</h1>
      <hr/>
      <Contador />
    </div>
  )
}

export default App
