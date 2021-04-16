
export const Funciones = () => {

    const sumar = (numberOne: number, numberTwo: number = 5): number => {
        return numberOne + numberTwo;
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(5, 1).toFixed()} </span>
        </div>
    )
}
