import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';

const Cards = () => {

    const [chars, setChars] = useState([]);
    useEffect(()=>{
        RickAndMortyService.getAllCharacters()
       .then((data) => setChars(data.results))
       .catch((error) => console.log(error));
    }, [])
    console.log(chars);
    const cardList = chars.map((m)=> <Card char={m} key={m.id}/>)
    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
