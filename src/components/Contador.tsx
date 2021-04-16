import { useState } from 'react'

const Contador = () => {
    const [valor, setValor] = useState(0);

    const handleIncrement = () => {
        setValor(valor + 1)
    }

    const handleDecrement = () => {
        setValor(valor - 1);
    }
    return (
        <>
            <h3>Contador: <small>{valor}</small> </h3>
            <button
                className="btn btn-primary"
                onClick={() => handleIncrement()}> +1 </button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => handleDecrement()}> -1 </button>
        </>
    )
}

export default Contador
