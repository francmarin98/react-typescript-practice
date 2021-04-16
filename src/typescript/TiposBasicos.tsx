import { Fragment } from 'react'

const TiposBasicos = () => {

    //String
    let nombre: string | number = 'Francisco';
    //Number
    const edad: number = 22;
    //Boolean
    const estaActivo:boolean = true;
    //Arrays
    const poderes:string[] = ['Velocidad', 'Volar', 'Programar']

    return (
        <Fragment>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'Inactivo'}
            <p>Poderes: {poderes.join(', ')}</p>
        </Fragment>
    )
}

export default TiposBasicos
