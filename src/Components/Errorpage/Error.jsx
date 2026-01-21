import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <div className='justify-items-center'>
                <img src={error} alt="" />
                <h1 className='font-semibold text-5xl mt-7'>Oops, page not found!</h1>
                <p className='text-[#627382] text-xl mt-5 mb-3'>The page you are looking for is not available.</p>
                <Link className='justify-items-centercenter ml-205 mt-4 mb-5' to='./apps'> <button className='btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go Back!</button> </Link>
            </div>
        </div>
    );
};

export default Error;