import React from 'react';
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import Layout from "./layout";

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }){
            nodes {
                titulo
                contenido
                imagen {
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const ContendorHabitacion = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
    h2{
        text-align: center;
        padding: 10px;
        font-size: 4rem;
    }
`;

const HabitacionTemplate = ({data}) => {

    //console.log(data.allDatoCmsHabitacion.nodes[0]);

    const {titulo, contenido, imagen} = data.allDatoCmsHabitacion.nodes[0];

    return ( 
        <Layout>
            <ContendorHabitacion>
                <h2>{titulo}</h2>
                <div>
                    <Image fluid={imagen.fluid}/>
                    <p>{contenido}</p>
                </div>
            </ContendorHabitacion>
        </Layout>
     );

}
 
export default HabitacionTemplate;