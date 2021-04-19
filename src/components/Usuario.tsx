import { User } from '../models/usersModel';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuario = () => {

    const { users, fetchDataUsers } = useUsuarios()

    const renderItem = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <td>
                    <img className="img-rounded"
                        height="60"
                        width="60"
                        src={user.avatar}
                        alt={user.first_name}
                    />
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuario</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => renderItem(user))
                    }
                </tbody>
            </table>

            <button className="btn btn-primary"
                onClick={() => fetchDataUsers()}>
                Siguiente
            </button>
        </>
    )
}
