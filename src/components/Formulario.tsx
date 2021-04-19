import { useForm } from '../hooks/useForm';

const Formulario = () => {

    const { formulario, email, password, onInputChange } = useForm({
        email: 'francisco@marin.com',
        password: '12345678'
    });

    return (
        <>
            <h3>Formulario</h3>
            <input type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={({ target }) => onInputChange('email', target.value)} />

            <br />

            <input type="text"
                className="form-control"
                placeholder="Password"
                value={password}
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
