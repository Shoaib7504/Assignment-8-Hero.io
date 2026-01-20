import React from 'react';
import icon from '../../assets/icon-ratings.png'
import icon1 from '../../assets/icon-downloads.png'

const HomeCards = ({ app }) => {
    //  console.log(app);
    const { image, title, ratingAvg, downloads } = app


    return (
        <div className=' hover:sm'>
            <div className='h-[400px] w-[310px] rounded-xl  p-5 mr-5 mt-5 shadow-2xl'>
                <div className=''>
                    <img className='h-[285px] w-[285px] rounded-xl justify-items-center' src={image} alt="" />
                </div>

                <div>
                    <h1 className='font-medium text-xl mt-3'>{title}</h1>
                    <div className='flex justify-between mr-5 ml-5 mt-3'>
                        <div className='w-[70px] h-[30px] bg-[#F1F5E8] flex justify-items-center justify-evenly gap-1.5 rounded-sm'>
                            <img className='w-[20px] h-[20px] mt-1.5' src={icon1} alt="" />
                            <h3 className='text-[#00D390] mt-0.5'>{downloads}</h3>


                        </div>
                        <div className='h-[32] w-[54px] bg-[#FFF0E1] flex justify-items-center justify-evenly rounded-sm'>
                            <img className='w-[16px] h-[16px] mt-1.5' src={icon} alt="" />
                            <h3 className='text-[#FF8811] mt-0.5'>{ratingAvg}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeCards;