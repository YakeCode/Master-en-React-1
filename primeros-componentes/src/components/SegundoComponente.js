import React from 'react';

export const SegundoComponente = () => {
    // array
    const libros = [
        {
            "nombre": "Don Quijote de la Mancha",
            "autor": "Miguel de Cervantes",
            "genero": "Novela"
        },
        {
            "nombre": "En busca del tiempo perdido",
            "autor": "Marcel Proust",
            "genero": "Novela"
        },
        {
            "nombre": "Ulises",
            "autor": "James Joyce",
            "genero": "Novela"
        },
        {
            "nombre": "La Odisea",
            "autor": "Homero",
            "genero": "Épica"
        },
        {
            "nombre": "Guerra y paz",
            "autor": "León Tolstói",
            "genero": "Novela"
        },
        {
            "nombre": "Moby-Dick",
            "autor": "Herman Melville",
            "genero": "Novela"
        },
        {
            "nombre": "Hamlet",
            "autor": "William Shakespeare",
            "genero": "Tragedia"
        },
        {
            "nombre": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "genero": "Realismo mágico"
        },
        {
            "nombre": "El Gran Gatsby",
            "autor": "F. Scott Fitzgerald",
            "genero": "Novela"
        },
        {
            "nombre": "Crimen y castigo",
            "autor": "Fiódor Dostoyevski",
            "genero": "Novela"
        }
    ];

    
    // function
    const imprimirLibros = () => {

        
        return  libros.map(
            
        (libro, index) => (
            <article key={index}>
                <p>{index + 1}</p>
                <h4>{libro.nombre}</h4>
                <ul>
                    <ul><strong>Autor:</strong> {libro.autor}</ul>
                    <ul><strong>Género:</strong> {libro.genero}</ul>
                </ul>
            </article>
        ))
    };
    
    return ( // componente
        <div className='segundo-componente' id="segundo">
            <h2>Listado de libros</h2>

            {libros.length >=1 ? imprimirLibros(libros) : <h1>No hay libros!!</h1>}

            
        </div>
    );
};



