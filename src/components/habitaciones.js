import React from 'react';
import Imagen from "gatsby-image";
import styled from "@emotion/styled";
import { Link } from 'gatsby';

const Boton = styled(Link)`
    display: block;
    margin-top: 1rem;
    background-color: rgba(44,62,80,.85);
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
`;

const Habitaciones = ({habitacion}) => {

    const {titulo, contenido, imagen, slug} = habitacion;
    return ( 
        <div className="contenedor-cards">
            <Imagen fluid={imagen.fluid}/>
            <div>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
                <Boton to={slug}>Ver mas</Boton>
            </div>
        </div>
     );
}
 
export default Habitaciones;