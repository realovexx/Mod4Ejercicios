import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../services/RickAndMorty.service';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { chars: [] };
    }

    componentDidMount() {
       // RickAndMortyService.getAllCharacters()
       //.then((data) => this.setState({chars: data.results}))
       // .catch((error) => console.log(error));
    }

    render() {
        return (        
                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Wubba Lubba Dub Dub!</h1>
                                <p className="lead text-muted">Mirate esta galeria de personajes, cada uno con sus detalles!</p>
                                <p>
                                    <a href="#" className="btn btn-primary my-2">Este botón haría algo</a>
                                    <a href="#" className="btn btn-secondary my-2">Si supiera cómo hacerlo!</a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <Cards />
                </main>            
        )
    }
}

export default Main
