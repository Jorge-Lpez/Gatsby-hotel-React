import React from 'react';
import { graphql, useStaticQuery} from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const TextoInicial = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
                query{
                    allDatoCmsPagina(filter: { slug: { eq: "inicio" } } ) {
                    nodes{
                        titulo
                        contenido
                        imagen{
                            fluid{
                                ...GatsbyDatoCmsFluid
                            }                       
                        }
                    }
                    }
                }
    `);

    //srcSet
    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];
    //console.log(informacion.allDatoCmsPagina.nodes[0].titulo);
    //console.log(informacion);

    return ( 
        <>
            <h2
                css={css`
                    font-size: 5rem;
                    text-align: center;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                `}
            >{titulo}</h2>
            <TextoInicial>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </TextoInicial>
        </>
     );
}
 
export default ContenidoInicio;