import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const  SobreNosotros = styled.div`
    max-width: 1200px;
    width: 95%;
    margin:0 auto;
    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    p{
        line-height: 2;
    }
`;

const ContenidoNosotros = () => {

    const informacion = useStaticQuery(
        graphql`
            query{
                allDatoCmsPagina(filter: { slug: { eq: "nosotros" } } ) {
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid( maxWidth: 1200){
                            ...GatsbyDatoCmsFluid
                        }                       
                    }
                }
                }
            }
        `
    );

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];

    return ( 
        <> 
            <div
                css={css`
                    margin-bottom: 663px;;
                `}
            >
                <h2
                    css={css`
                        font-size: 5rem;
                        text-align: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;
                    `}
                >{titulo}</h2>
                <SobreNosotros>
                    <p>{contenido}</p>
                    <Image fluid={imagen.fluid}/>
                </SobreNosotros>
            </div>
        </>
     );
}
 
export default ContenidoNosotros;