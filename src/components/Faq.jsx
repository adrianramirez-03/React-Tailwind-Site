import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

const Faq = () => {
  return (
    <div name='faq'className='grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mb-5'>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <QuestionMarkCircleIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h2 className='font-bold text-2xl my-6'>Is the service completely free?</h2>
                <p className='text-gray-600 text-xl'>The service is completely free, we operate 100% on donations. If you ever want to hire a tutor, the rates will depend case by case, based on experience.</p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <QuestionMarkCircleIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h2 className='font-bold text-2xl my-6'>What are the requirements to start learning?</h2>
                <p className='text-gray-600 text-xl'>We do not require any pre-requisites when wanting to learn! A total beginner can start learning whenever they want!</p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <QuestionMarkCircleIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h2 className='font-bold text-2xl my-6'>Where can I donate?</h2>
                <p className='text-gray-600 text-xl'> At the moment, we do not have the donation page set up, but we will send out an email once it's all up and running.</p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <QuestionMarkCircleIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h2 className='font-bold text-2xl my-6'>Is there a newsletter for this service platform?</h2>
                <p className='text-gray-600 text-xl'>We are currently working on the design of our newsletter but we will have it ready by early next week, be on the look out!</p>
            </div>
        </div>
    </div>
  )
}

export default Faq