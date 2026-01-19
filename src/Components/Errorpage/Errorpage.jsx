import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { useRouteError } from 'react-router';

const Errorpage = () => {
    const error=useRouteError()
    return (
        <div>
            <Navbar></Navbar>
          <div>{error.message}</div>
            <h1>404 this is error page</h1>
            <Footer></Footer>

            
        </div>
    );
};

export default Errorpage;