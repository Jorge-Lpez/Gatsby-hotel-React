import React from "react";
import Layout from "../components/Layout";
import ImagenHotel from "../components/imagenHotel";
import ContenidoInicio from "../components/contenidoinicio";
import useHabitaciones from "../hooks/use-habitaciones";
import Habitaciones from "../components/habitaciones";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ContenedorHabitaciones = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    h2{
      text-align: center;
    }

    p{
      text-align: justify;
    }

    .contenedor-cards{
        border: 1px solid #eee;
        margin-bottom: 20px;
        div{
          padding: 20px;
        }
    }
`;

const IndexPage = () => {
  const informacion = useHabitaciones();
  return ( 
      <>
        <Layout>
            <ImagenHotel/>
            <ContenidoInicio/>
            <h2
              css = {css`
                text-align: center;
                font-size: 4rem;
                margin-top: 3rem;
                margin-bottom: 2rem;
              `}
            >Habitaciones</h2>
            <ContenedorHabitaciones>
                {informacion.map(habitacion => (
                  <Habitaciones
                    key = {habitacion.id}
                    habitacion = {habitacion}
                  />
                ))}
            </ContenedorHabitaciones>
        </Layout>
      </>
   );
}
 
export default IndexPage;
