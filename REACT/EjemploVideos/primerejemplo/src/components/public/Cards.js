import React from 'react'
import Card from './Card'

const Cards = ({chars}) => {
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
