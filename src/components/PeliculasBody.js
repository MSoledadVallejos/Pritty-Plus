import React from 'react';
import peliculas from "../peliculas.json";
import ReactBootstrap from './ReactBootstrap';
import "../styles/PeliculasBody.css"


function PeliculasBody() {
    return (


        <div className="container">
            <div className="row">
                <div className="col">
                    {/* card */}
                    <ul className='moviesGrid'>
                        {
                            peliculas.map((pelicula) => (
                                <ReactBootstrap key={pelicula.id} pelicula={pelicula} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export { PeliculasBody };