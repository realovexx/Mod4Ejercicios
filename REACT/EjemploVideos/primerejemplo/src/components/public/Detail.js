import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

const Detail = () => {

    const [char, setChar] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname);
        RickAndMortyService.getAllCharacterById(id)
            .then((data) => setChar(data))
    }, [id])

    return (
        <div>
            <p> Soy un Detail </p>
        </div>
    )
}

export default Detail
