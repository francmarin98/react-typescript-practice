import { useState } from 'react';

export const useForm = <T extends Object>(formReceived: T) => {
    const [formulario, setFormulario] = useState(formReceived);

    const onInputChange = (campo: keyof T, valor: string) => {
        setFormulario({
            ...formulario,
            [campo]: valor
        });
    };
    return {
        ...formulario,
        formulario,
        onInputChange
    }
}
