import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const ImagenBackground = styled(BackgroundImage)`
     height: 800px;
`;

const Contenedor = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.75), rgba(34,49,63,.75));
    color: #fff;
    height: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 2rem;
    }

    h1{
        margin: 0;
        font-size: 5rem;
    }
`;

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
        query{
            image: file(relativePath: { eq:"8.jpg"}){
                sharp:childImageSharp {
                    fluid {
                        srcSetWebp
                    }
                }
            }
        }
    `);
    //...GatsbyImageSharpFluid_withWebp
    //srcSetWebp
    //console.log(image.sharp.fluid);

    return ( 
        <ImagenBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <Contenedor>
                <h1>Bienvenidos al hotel gatsby</h1>
                <p>Difruta tus vacaciones ahora y con exelente atencion</p>
            </Contenedor>
        </ImagenBackground>
     );
}
 
export default ImagenHotel;