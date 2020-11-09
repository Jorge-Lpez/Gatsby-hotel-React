import React from 'react';
import Navegacion from "./navegacion";
import { css } from "@emotion/core";
import { Link } from "gatsby"

const Header = () => {
    return ( 
        <header
            css={ css`
                    background-color: #2C5884;
                    padding: 1rem;
                `
            }
        >
            <div
                css={css`
                        max-width: 1200px;
                        margin: 0 auto;
                        @media screen and (min-width: 768px){
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `
                }
            >
                <Link
                    to={"/"}
                    css={css`
                        text-decoration: none;
                        color: #fff;
                        text-align: center;
                        cursor: pointer;
                        font-size:3rem;
                    `}
                >
                    Hotel gatsby
                </Link>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;