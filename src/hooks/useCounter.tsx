import { useState } from 'react';

export const useCounter = (initalState: number = 10) => {
    const [valor, setValor] = useState(initalState);

    const handleIncrement = (numero: number) => {
        setValor(valor + numero);
    }
    return {
        valor,
        handleIncrement
    }
}
