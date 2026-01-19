import React from 'react';
import playstore from '../../assets/Playstore.png'
import Appstore from '../../assets/Applestore.png'
import Hero from '../../assets/hero.png'
import { NavLink, useLoaderData } from 'react-router';
const Home = () => {

    const apps =useLoaderData()
    console.log(apps);
    
    return (
        <div className=''>
            <div>
                <h1 className='text-[72px] text-center font-semibold'>We Build <br /> <span className="text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">Productive</span> Apps</h1>
                <p className='text-center text-[#627382] text-[20px]'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-x-30 mt-10'>
                    <NavLink to='https://play.google.com/store/apps?hl=en'> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><span><img src={playstore} alt="" /></span>Google Play</button></NavLink>
                   <NavLink to='https://www.apple.com/app-store/'>  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><span><img src={Appstore} alt="" /></span>App Store</button></NavLink>
                </div>
            </div>

            {/* Hero img section */}
            <div className='justify-items-center mt-20'>
                <img src={Hero} alt="" />
            </div>

            {/* Banner section */}

            <div className='h-[420px] w- border-4 border-red-500 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
                <h1 className='font-bold md:text-[48px] text-white text-center mt-3.5'>Trusted by Millions, Built for You</h1>


                <div className=' grid md:grid-cols-3 justify-items-center mt-8'>
                    <div className='justify-items-center mt-2.5'>
                        <p className='text-white text-xl'>Total Downloads</p>
                        <h1 className='text-5xl font-bold text-white'>29.6M</h1>
                        <p className='text-xl text-white'>21% more than last month</p>
                    </div>

                    <div className='justify-items-center mt-2.5'>

                        <p className='text-white text-xl'>Total Reviews</p>
                        <h1 className='text-5xl font-bold text-white'>906K</h1>
                        <p className='text-xl text-white'>46% more than last month</p>
                    </div>

                    <div className='justify-items-center mt-2.5'>

                        <p className='text-white text-xl'>Active Apps</p>
                        <h1 className='text-5xl font-bold text-white'>132+</h1>
                        <p className='text-xl text-white'>31 more will Launch</p>
                    </div>
                </div>


            </div>

            {/*Home Trending aap scection */}


            <div className='justify-items-center mt-[50px]'>
                <h1 className='font-bold text-4xl'>Trending Apps</h1>
                <p className='text[#627382] mt-1.5'>Explore All Trending Apps on the Market developed by us</p>
            </div>

        </div>

    );
};

export default Home;