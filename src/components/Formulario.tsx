import { useState } from 'react';

const Formulario = () => {

    const [formulario, setFormulario] = useState({
        email: 'francmarinc@gmail.com',
        password: '123456'
    });

    const onInputChange = (campo: string, valor: string) => {
        setFormulario({
            ...formulario,
            [campo]: valor
        });
    };

    return (
        <>
            <h3>Formulario</h3>
            <input type="text"
                className="form-control"
                placeholder="email"
                value={formulario.email}
                onChange={({ target }) => onInputChange('email', target.value)} />

            <br />

            <input type="text"
                className="form-control"
                placeholder="Password"
                value={formulario.password}
                onChange={({ target }) => onInputChange('password', target.value)} />

            <br />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default Formulario
