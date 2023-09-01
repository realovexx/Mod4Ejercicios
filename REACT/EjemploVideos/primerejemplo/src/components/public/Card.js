import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({char}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" 
                width="100%" 
                src={char.image} 
                alt="lafotito"/>
                <h3 className="mb-0 text-dark">{char.name}</h3>
                <div className="card-body">
                    <p className="card-text">Species: {char.species} / Location: {char.location.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary"> 
                            <Link to={`/details/${char.id}`} className="nav-link px-2 text-secondary">View</Link>
                            </button>
                          {/*  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>*/}
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
