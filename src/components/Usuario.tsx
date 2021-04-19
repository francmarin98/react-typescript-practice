import { useEffect, useRef, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqRespListado, User } from '../models/usersModel';

export const Usuario = () => {

    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    const fetchDataUsers = async () => {

        // Llamar API
        const response = await reqResAPI.get<ReqRespListado>('/users', {
            params: {
                'page': pageRef.current
            }
        });

        //Aplico destructuracion, como buena practica para obtener la info que es relevante
        const { data } = response.data;  //Esto es lo mismo que const users = response.data.data

        if (data.length > 0) {
            //Establezco la data en el State
            setUsers(data);
            pageRef.current++;
        } else {
            alert('No hay más registros')
        }



    }

    useEffect(() => {

        fetchDataUsers();

    }, []);

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
