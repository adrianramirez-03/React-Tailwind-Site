import React from 'react'
import supImg from '../assets/support.jpeg'

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supImg} alt='/' />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Contact us using the form below</h3>
                <p className='py-4 text-3xl text-slate-300 text-center'>Our customer service department is availabel 24/7!</p>
            </div>
            <div className='bg-zinc-200 flex flex-col justify-center py-4 rounded-lg mx-auto max-w-3xl mb-8'>
                <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded-lg'>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 text-black"/>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email*</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 text-black" required/>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Message*</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 h-[150px] text-black" required/>
                        </div>
                        <div>
                        <button className='px-6 py-3 justify w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <h1 className='font-bold justify-center flex text-3xl mt-5'>Frequently Asked Questions</h1>
    </div>
  )
}

export default Support