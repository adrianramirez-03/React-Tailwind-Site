import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>We've reached over 46 countries world wide</h2>
                <p className='text-3xl py-6 text-gray-500'>Our virtual tutoring services focuses on providing our future doctors, engineers and scientists the best 
                    help on the web. With our hundreds of online topics and tutors, your schedule will always align with someone on our team. </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center py-2'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>150</p>
                    <p className='text-gray-400 mt-2'>Topics</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>440</p>
                    <p className='text-gray-400 mt-2'>Tutors</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>122K</p>
                    <p className='text-gray-400 mt-2'>Students</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About