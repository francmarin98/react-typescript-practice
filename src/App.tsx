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
    </div>
  )
}

export default App
