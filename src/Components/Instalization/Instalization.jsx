import React, { useEffect, useState } from 'react';
import icon from '../../assets/icon-ratings.png'
import icon1 from '../../assets/icon-downloads.png'
const Instalization = () => {
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('wishList'))

        if (savedList) setWishlist(savedList)
    }, [])




    return (
        <div className='bg-[#f3f5f7] '>

            <div className='justify-items-center mt-10'>
                <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                <p className='text-[#627382] mt-5 text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <h1>{wishlist.length} Apps Found</h1>
            <div className='space-y-4 mt-10'>
                {wishlist.map(p => (
                    <div className='h-[120px] mt-8 mb-5 w-full'>
                        <div className='flex justify-between  gap-10 mx-5 ml-10'>
                            <div className=''>
                                <img className='h-25 w-25 mt-4 rounded-sm' src={p.image} alt="" />
                            </div>
                            <div className='rounded-2xl bg-white shadow-xl p-8 w-full'>
                                <h1 className='font-semibold text-xl'>{p.title}</h1>
                                <div className='flex gap-x-5'>
                                    <div>
                                        <img className='h-5 w-5' src={icon1} alt="" />
                                        <h3 className='text-green-400'>{p.downloads}M</h3>
                                    </div>
                                    <div>
                                        <div>
                                            <img className='h-5 w-5' src={icon} alt="" />
                                            <h3 className='text-green-400'>{p.ratingAvg}</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <div>

                                            <h3 className='mt-5'>{p.size}MB</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="mt-10 btn btn-outline btn-success">Uninstall</button>
                        </div>

                    </div>
                ))}
            </div>


        </div>

    );
};

export default Instalization;