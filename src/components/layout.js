import React from 'react';
import Header from "./header";
import Helmet from "react-helmet";

const Layout = (props) => {
    return ( 
        <>
            <Helmet>
                <title>Hotel Gatsby</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}
        </>
     );
}
 
export default Layout;