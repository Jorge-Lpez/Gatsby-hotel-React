import { graphql, useStaticQuery } from "gatsby"


const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                titulo
                contenido
                slug
                id
                imagen{
                    fluid (maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
                }
            }
        }
    `);

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        id: habitacion.id,
        imagen: habitacion.imagen,
        slug: habitacion.slug
    }))
}
 
export default useHabitaciones;