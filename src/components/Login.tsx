import { AuthState } from '../models/authModel';
import AuthAction from '../actions/authActions';
import { useEffect, useReducer } from 'react';

const initialState: AuthState = {
    validando: true,
    token: 'null',
    userName: '',
    nombre: '',
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                userName: ''
            }

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'Abc134',
                nombre,
                userName: username
            }

        default:
            return state;
    }
}

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1000);
    }, []);

    const login = () => {
        dispatch({ type: 'login', payload: { nombre: 'Francisco', username: 'Sisco' } })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    if (state.validando) {
        return (<>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>
        </>)
    }

    return (
        <>
            <h3>Login</h3>
            {
                (state.token)
                    ? <div className="alert alert-success"> Autenticado como: {state.nombre} </div>
                    : <div className="alert alert-danger"> No autenticado </div>
            }

            {
                (state.token)
                    ?
                    (
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    )
                    :
                    (
                        <button className="btn btn-primary" onClick={login}>Login</button>
                    )
            }


        </>
    )
}
