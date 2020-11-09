import { graphql, useStaticQuery } from "gatsby";


const useSEO = () => {
    const seo = useStaticQuery(graphql`
        query{
            datoCmsSite{
            globalSeo{
                siteName
                titleSuffix
                fallbackSeo{
                title
                description
                }
            }
            }
        }
    `);

    return seo.datoCmsSite.globalSeo;
}
 
export default useSEO;