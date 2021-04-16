import { useCounter } from '../hooks/useCounter';

const ContadorConHook = () => {

    const { valor, handleIncrement } = useCounter();


    return (
        <>
            <h3>Contador con hook: <small>{valor}</small> </h3>
            <button
                className="btn btn-primary"
                onClick={() => handleIncrement(+1)}> +1 </button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => handleIncrement(-1)}> -1 </button>
        </>
    )
}

export default ContadorConHook;
