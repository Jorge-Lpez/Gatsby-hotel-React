import React from 'react';
import { Link } from "gatsby";
import styled from "@emotion/styled";

const PiePagina = styled.footer`
    background-color: #2C5884;
    color: #fff;
    div{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        li{
            list-style: none;
            padding: 10px;
        }
    }
    p{
        padding: 10px;
        text-align: center;
        background-color: #264361;
        margin: 0;
    }
`;

const LinkFooter = styled(Link)`
    color: #fff;
    text-decoration: none;
`;


const Footer = () => {
    
    const date = new Date().getFullYear();

    return ( 
        <PiePagina>
            <div>
                <li><LinkFooter to={"/nosotros"}>Nosotros</LinkFooter></li>
                <li><LinkFooter to={"/"}>Principal</LinkFooter></li>
                <li><LinkFooter to={"/nosotros"}>Sobre nosotros</LinkFooter></li>
            </div>
            <p>Hotel Gatsby. Todos los derechos Reservados {date} &copy;</p>
        </PiePagina>
     );
}
 
export default Footer;