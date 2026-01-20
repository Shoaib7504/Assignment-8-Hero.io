import React from 'react';
import { useLoaderData, useParams } from 'react-router';
// import demoapp from '../../assets/demo-app (1).webp'
import icon from '../../assets/icon-ratings.png'
import icon1 from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'


const AppsDetails = () => {
    const appdetail = useLoaderData()
    // console.log(appdetail);


    const { id } = useParams()
    // console.log(params);
    const apps = appdetail.find(p => String(p.id) === id)
    console.log(apps);

    return (
        <div>
            <div className='flex mt-20'>
                <div>
                    <img className='h-[350px] w-[350px] ml-10 rounded-xl' src={apps.image} alt="" />
                </div>
                <div className='ml-20'>
                    <h1 className='font-bold text-4xl'>{apps.title}</h1>
                    <p className='mt-10'><span className='text-[#627382] text-2xl'>Developed by  </span>
                        <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>{apps.companyName}</span></p>

                    <div className='flex gap-20'>

                        <div className='justify-items-center gap-y-4 mt-12'>
                            <img src={icon1} alt="" />
                            <p>Downloads</p>
                            <h1 className='font-bold text-[40px]'>{apps.downloads}M</h1>

                        </div>
                        <div className='justify-items-center gap-y-4 mt-12'>
                            <img src={icon} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='font-bold text-[40px]'>{apps.ratingAvg}</h1>

                        </div>
                        <div className='justify-items-center gap-y-4 mt-12'>
                            <img src={review} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='font-bold text-[40px]'>{apps.reviews}K</h1>

                        </div>
                    </div>
                      <button className='mt-5 bg-green-400 text-white p-3 rounded-xl'>Install Now ({apps.size} MB)</button>
                </div>

            </div>

            <div className='w-[1400px] mx-auto mt-20'>
                <h1 className='font-medium text-3xl'>Description</h1>
               
               <div className='my-10'>
                 <p className='text-[#627382] my-10'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                 <p className='text-[#627382] my-10'>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                 <p className='text-[#627382] my-10'>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
               </div>
            </div>

        </div>
    );
};

export default AppsDetails;