import React from 'react';
import { graphql, useStaticQuery} from "gatsby";
import Image from "gatsby-image";

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
            <h2>{titulo}</h2>
            <div>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </div>
        </>
     );
}
 
export default ContenidoInicio;