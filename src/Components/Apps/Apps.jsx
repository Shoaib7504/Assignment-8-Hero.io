import React from 'react';

import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';

const Apps = () => {
    const products = useLoaderData()
    // console.log(products);


    return (
        <div>
            <div className='justify-items-center mt-20 sm:items-center '>
                <h1 className='font-bold text-5xl '>Our All Applications</h1>
                <p className='text-[#627382] mt-3.5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

             <div className='flex justify-between mx-20'>
                <h1>({products.length})Apps Found</h1>
                <button>Search app</button>

            </div>


            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto w-[1600px] mt-10 mb-5 '>
                {
                    products.map(product => <AppsCard key={product.id} product={product}></AppsCard> )
                }

            </div>
        </div>
    );
};

export default Apps;