import React, { useState } from 'react';

import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';

const Apps = () => {
    const products = useLoaderData()



    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
        ? products.filter(product =>
            product.title.toLocaleLowerCase().includes(term)
          )
        : products

    // console.log(searchedProducts);




    return (
        <div>
            <div className='justify-items-center mt-20 sm:items-center '>
                <h1 className='font-bold text-5xl '>Our All Applications</h1>
                <p className='text-[#627382] mt-3.5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between md:mx-20 sm:flex-col-1 mt-10'>
                <h1 className='font-bold text-2xl'>({searchedProducts.length})Apps Found</h1>
                <label className="input">

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search App" />
                </label>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto w-[1600px] mt-10 mb-5 '>
                {
                    searchedProducts.map(product => <AppsCard key={product.id} product={product}></AppsCard>)
                }

            </div>
        </div>
    );
};

export default Apps;