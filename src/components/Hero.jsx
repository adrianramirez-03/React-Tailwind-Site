import React from 'react'
import {
    UserGroupIcon,
    DocumentSearchIcon,
    AcademicCapIcon

} from '@heroicons/react/solid'

import bgImg from "../assets/tutoring.png"

export const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start px-2 py-8'>
                <p className='text-2xl'>Welcome to our platform!</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>DyadLearning</h1>
                <p className='text-2xl'>The new way of learning!</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Learn More</button>
            </div>
            <div className=''>
                <img className='w-full' src={bgImg} alt='/' />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Platform Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><UserGroupIcon className='h-6 text-indigo-600'/>Community</p>
                    <p className='flex px-4 py-2 text-slate-500'><DocumentSearchIcon className='h-6 text-indigo-600'/>Topics</p>
                    <p className='flex px-4 py-2 text-slate-500'><AcademicCapIcon className='h-6 text-indigo-600'/>Tutoring</p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Hero
