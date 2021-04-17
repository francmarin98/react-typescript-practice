type loginPayload = {
    username: string;
    nombre: string;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: loginPayload }

export default AuthAction;
