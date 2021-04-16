import { Persona } from '../models/Persona.model'

//Componente
const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Francisco',
        edad: 23,
        direccion: {
            pais: 'Ecuador',
            casaNo: 1234
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>{JSON.stringify(persona, null, 2)}</pre>
        </>
    )
}

export default ObjetosLiterales
