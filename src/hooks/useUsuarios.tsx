import { useState, useRef, useEffect } from 'react';
import { reqResAPI } from '../api/reqRes';
import { User, ReqRespListado } from '../models/usersModel';


export const useUsuarios = () => {

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
        } else {
            pageRef.current--;
            alert('No hay más registros');
        }
    }

    const paginaSiguiente = () => {
        pageRef.current++;
        fetchDataUsers();
    }

    const paginaAnterior = () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            fetchDataUsers();
        }
    }

    useEffect(() => {

        fetchDataUsers();

    }, []);

    return {
        users,
        paginaAnterior,
        paginaSiguiente
    }
}
