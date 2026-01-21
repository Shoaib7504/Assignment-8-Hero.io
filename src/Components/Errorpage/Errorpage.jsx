import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { useRouteError } from 'react-router';
import Error from './Error';

const Errorpage = () => {
    const error=useRouteError()
    return (
        <div>
            <Navbar></Navbar>
          <div>{error.message}</div>
            <Error></Error>
            <Footer></Footer>

            
        </div>
    );
};

export default Errorpage;