import React from 'react';
import Navegacion from "./navegacion";
import { css } from "@emotion/core";

const Header = () => {
    return ( 
        <header
            css={ css`
                    background-color: #222;
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
                <h1
                    css={css`
                        color: #fff;
                        text-align: center;
                    `}
                >Hotel gatsby</h1>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;